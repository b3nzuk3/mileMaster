import axios from 'axios'

export default async function handler(req, res) {
  const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY
  const PLACE_ID = process.env.GOOGLE_PLACE_ID

  if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
    return res
      .status(500)
      .json({ error: 'Missing API key or Place ID in environment variables.' })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    const response = await axios.get(url)
    const reviews = response.data.result.reviews || []
    const rating = response.data.result.rating || null
    const user_ratings_total = response.data.result.user_ratings_total || null
    res.status(200).json({ reviews, rating, user_ratings_total })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to fetch Google reviews', details: error.message })
  }
}
