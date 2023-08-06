const db = require('../models')
const Movie = db.Movie


const getAllMovies = async (request, response) => {

  const { page, size } = request.query

  const movies = await Movie.findAll({
    limit: size,
    offset: page - 1
  })

  const countMovie = await Movie.count()

  return response.json({
    data: movies,
    meta: {
      page: page,
      size: size,
      count: countMovie
    }
  })
}

const createNewMovie = async (request, response) => {
  const movie = await Movie.create(request.body)

  return response.json({ data: movie })
}

// Update & delete

module.exports = { getAllMovies, createNewMovie }
