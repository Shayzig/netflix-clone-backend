import http from 'http'
import path from 'path'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
const server = http.createServer(app)

// Express App Config
app.use(cookieParser())
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('public')))
} else {
    console.log(process.env.NODE_ENV)
    const corsOptions = {
        origin: ['http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            'http://localhost:5173'
        ],
        credentials: true
    }
    app.use(cors(corsOptions))
}

import { moviesRouts } from './api/movies/movie.routes.js'
// import { setupSocketAPI } from './services/socket.service.js'

// routes
// import { setupAsyncLocalStorage } from './middlewares/setupAls.middleware.js'
// app.all('*', setupAsyncLocalStorage)

app.use('/api/movies', moviesRouts)
// setupSocketAPI(server)

// Make every server-side-route to match the index.html
// so when requesting http://localhost:3030/index.html/car/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow vue/react-router to take it from there
app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})


import { logger } from './services/logger.service.js'
import { log } from './middlewares/logger.middleware.js'
const port = process.env.PORT || 3032
server.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})

        // "start": "nodemon server.js",
        // hello
