import express from 'express'
import { log } from '../../middlewares/logger.middleware.js'
import { getMovies, getMovieById, addMovie, removeMovie } from './movie.controller.js'

const router = express.Router()

router.get('/', log, getMovies)
router.get('/:id', getMovieById)
router.post('/', addMovie)
router.delete('/:id', removeMovie)

export const moviesRouts = router
