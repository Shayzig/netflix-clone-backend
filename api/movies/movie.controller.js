import {movieService} from './movie.service.js'
import {logger} from '../../services/logger.service.js'

export async function getMovies(req, res) {
  try {
    const movies = await movieService.query()
    logger.debug('Getting Movies:', req.query)
    // const filterBy = {
    //   txt: req.query.txt || '',
    //   pageIdx: req.query.pageIdx
    // }
    // const movies = await movieService.query(filterBy)
    res.json(movies)
  } catch (err) {
    logger.error('Failed to get movies', err)
    res.status(400).send({ err: 'Failed to get movies' })
  }
}

export async function getMovieById(req, res) {
  try {
    const movieId = req.params.id
    const movie = await movieService.getById(movieId)
    res.json(movie)
  } catch (err) {
    logger.error('Failed to get movie', err)
    res.status(400).send({ err: 'Failed to get movie' })
  }
}

export async function addMovie(req, res) {

  try {
    const movie = req.body
    const addedMovie = await movieService.add(movie)
    res.json(addedMovie)
  } catch (err) {
    logger.error('Failed to add movie', err)
    res.status(400).send({ err: 'Failed to add movie' })
  }
}

export async function removeMovie(req, res) {
  try {
    const movieId = req.params.id
    const removedId = await movieService.remove(movieId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove movie', err)
    res.status(400).send({ err: 'Failed to remove movie' })
  }
}


