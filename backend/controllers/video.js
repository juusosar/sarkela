const videoRouter = require('express').Router()
const path = require('path')

videoRouter.get('/info', async (request, response) => {
    response.json({
        title: 'About Me',
        description: 'Brief introduction about me regarding the role you are offering.',
        videoUrl: '/api/video'
    })
})

videoRouter.get('/', async (request, response) => {
    const videoPath = path.join(__dirname, '..', 'media', 'esittely.mp4')
    response.sendFile(videoPath)
})

module.exports = videoRouter