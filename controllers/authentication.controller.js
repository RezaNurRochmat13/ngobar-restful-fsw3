const db = require('../models')
const User = db.User
const passwordUtil = require('../utils/password.util')
const tokenUtil = require('../utils/token.util')


const register = async (request, response) => {
  await User.create({
    name: request.body.name,
    email: request.body.email,
    password: passwordUtil.encrypt(request.body.password)
  })

  return response.status(201).json({ message: 'User registered successfully.' })
}

const login = async (request, response) => {
  const user = await User.findOne({ where: { email: request.body.email }})

  if (!user) return response.status(401).json('User not already register.')

  const checkUser = await passwordUtil.compare(request.body.password, user.password)

  if (!checkUser) return response.status(401).json({ message: 'Unauthorized acess. Check your account.' })

  // Generate token nya
  const token = await tokenUtil.encode(user)

  return response.json({ token: token })
}

module.exports = { register, login }
