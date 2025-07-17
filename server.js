import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

const GOOGLE_PLACES_API_KEY = 'AIzaSyBnZYnuGjt1QQ-NtrW7FC2_2KWPQuIgMXc'
const PLACE_ID = 'ChIJ-7kTwLqh7gYRgkOahFrlqMs'

app.use(cors())

app.get('/api/google-reviews', async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    const response = await axios.get(url)
    const reviews = response.data.result.reviews || []
    const rating = response.data.result.rating || null
    const user_ratings_total = response.data.result.user_ratings_total || null
    res.json({ reviews, rating, user_ratings_total })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to fetch Google reviews', details: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
