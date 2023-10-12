import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './database/dbConnection.js'
import { categoryRouter } from './src/routes/category.routes.js'
dotenv.config()
const app = express()
const port = process.env.PORT
//*********** DB Connection **************/
dbConnection()
//*********** Express midllewares *******************/
app.use(express.json())
app.use(express.static('uploads'))
//*********** Routes midllewares *******************/
app.use('/categories', categoryRouter)
//************ Starting Server *************************/
app.listen(port, ()=>{
    console.log(`*Server Started on Port ${port}*`)
})