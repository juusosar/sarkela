import { useState, useEffect } from 'react'

import './VideoPlayer.css'

function VideoPlayer() {
  const [videoInfo, setVideoInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/video/info')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load video info')
        return res.json()
      })
      .then(data => {
        setVideoInfo(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="video-container">Loading...</div>
  if (error) return <div className="video-container error">{error}</div>

  return (
    <div className="video-container">
      <h2>{videoInfo.title}</h2>
      <p className="description">{videoInfo.description}</p>
      <video
        controls
        preload="metadata"
        className="video-player"
      >
        <source src={videoInfo.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
