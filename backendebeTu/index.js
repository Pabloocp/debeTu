import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import morgan from "morgan";
import messageRouter from "./routers/messageRouter.js";
import userRouter from "./routers/userRouter.js";
import cors from 'cors'


dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(morgan('tiny'))
app.use(cors())


  
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido al API debeTu!')
})


//toda ruta msg la pasa por el router el cual decide que hacer
app.use("/msg",messageRouter)

app.use("/user",userRouter)



//borrar mensaje
//app.delete('/msg/delete/:id', messageController.delete)

async function main(){
    mongoose.set("strictQuery",true)
    await mongoose.connect(process.env.URL_DB)
    await app.listen(process.env.SERVER_PORT)
    console.log("Servidor y BBDD encendidos")
}

main().catch(error => console.log("Fallo al arrancar al servidor" + error))


