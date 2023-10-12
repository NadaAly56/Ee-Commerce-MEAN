import express from 'express'
import { categoryModel } from '../models/category.model.js'
export const categoryRouter = express.Router()

categoryRouter.get('/', async(req,res)=>{
    const cats = await categoryModel.find()
    res.status(200).json({message:"success", cats})
})
categoryRouter.post('/', async(req, res)=> {
    const {title} = req.body
    const isExist = await categoryModel.findOne({title})
    if (isExist) 
        return res.status(309).json({message:"Category is already Exist"})
    
    await categoryModel.insertMany(req.body)
    res.status(200).json({message:"success"})
})