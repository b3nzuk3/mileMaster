import axios from 'axios'

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY
  const PLACE_ID = process.env.GOOGLE_PLACE_ID

  if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
    console.error('Missing environment variables:', {
      hasKey: !!GOOGLE_PLACES_API_KEY,
      hasPlaceId: !!PLACE_ID
    })
    return res
      .status(500)
      .json({ error: 'Missing API key or Place ID in environment variables.' })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    const response = await axios.get(url)

    if (!response.data || !response.data.result) {
      console.error('Invalid response from Google Places API:', response.data)
      return res.status(500).json({
        error: 'Invalid response from Google Places API',
        details: 'Result not found in API response'
      })
    }

    const reviews = response.data.result.reviews || []
    const rating = response.data.result.rating || null
    const user_ratings_total = response.data.result.user_ratings_total || null

    return res.status(200).json({ reviews, rating, user_ratings_total })
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return res.status(500).json({
      error: 'Failed to fetch Google reviews',
      details: error.message || 'Unknown error occurred'
    })
  }
}
