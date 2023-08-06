const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || '8001'
const movieRouter = require( './routes/movie.route') 
const authRouter = require( './routes/auth.route') 


app.use(express.json())
app.use(morgan('tiny'))
app.use(movieRouter)
app.use(authRouter)


app.get('/', (request, response) => {
  response.json({message: 'Ping succeeded'})
})

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
})
