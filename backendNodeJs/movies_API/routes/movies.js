const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();
  /**
   * @param {*} query Cuando tiene el ?,
   * el nombre del query y se puede concatenar.
   */
  router.get('/', async function (req, res, next) {
    const { tags } = req.query;

    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });
  /**
   * @param {*} params Cuando estan establecidos en la URL
   */
  router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;

    try {
      const movies = await moviesService.getMovie({ movieId });

      res.status(200).json({
        data: movies,
        message: 'movies retrieve'
      });
    } catch (err) {
      next(err);
    }
  });
  router.post('/', async function (req, res, next) {
    const { body: movie } = req;

    try {
      const createdMoviesId = await moviesService.createMovie({ movie });

      res.status(200).json({
        data: createdMoviesId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });
  router.put('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie });

      res.status(201).json({
        data: updatedMovieId,
        message: 'movie updated'
      });
    } catch (err) {
      next(err);
    }
  });
  router.delete('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;

    try {
      const deleteMovieId = await moviesService.deleteMovie({ movieId });

      res.status(200).json({
        data: deleteMovieId,
        message: 'movie deleted'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
