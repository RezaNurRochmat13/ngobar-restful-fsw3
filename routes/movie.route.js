const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie.controller')
const authMiddleware = require('../middleware/authentication')

router.use(authMiddleware)

router.get('/movies', movieController.getAllMovies)
router.post('/movies', movieController.createNewMovie)

module.exports = router
