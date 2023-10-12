import mongoose from 'mongoose'

export const dbConnection = ()=>{
    mongoose.connect(process.env.DBCONNECTION).then(()=>{
        console.log('*DataBase connected successfully*')
    }).catch(err=>{
        console.log("Error ecured while opining DataBase connection - ",err);
    })
}