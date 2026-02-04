const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const videoRouter = require('./controllers/video')

const app = express()

// Security headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}))

// CORS for development (Vite runs on port 5173)
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? false  // In production, serve frontend from same origin
    : 'http://localhost:5173'
}))

app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/video', videoRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
