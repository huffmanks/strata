import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })

import express from 'express'

import connectDB from './config/db.js'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import { errorHandler } from './middleware/error.middleware.js'
import path from 'path'
const __dirname = path.resolve()

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import teamRoutes from './routes/team.routes.js'

// Server Init
const app = express()

// Connect database
connectDB()

// Middleware
app.use(cors())
app.use(errorHandler)
app.use(express.json())
app.use('/static', express.static(path.join(__dirname, 'uploads')))
app.use(cookieParser())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/private', userRoutes)
app.use('/api/private', teamRoutes)

// Server Start
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Sever running on port ${PORT}`))
