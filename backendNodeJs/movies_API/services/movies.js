const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongodb = new MongoLib();
  }
  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongodb.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie(movieId) {
    const movie = await this.mongodb.get(this.collection, movieId);
    return movie || {};
  }

  async createMovie(movie) {
    const createdMovieId = await this.mongodb.create(this.collection, movie);
    return createdMovieId;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this.mongodb.update(this.collection, movieId, movie);
    return updatedMovieId;
  }

  async deleteMovie({ movieId }) {
    const deletedMovieId = await this.mongodb.delete(this.collection, movieId);
    return deletedMovieId;
  }
}

module.exports = MoviesService;