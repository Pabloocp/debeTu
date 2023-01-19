import { Router } from "express";
import * as messageController from "../controllers/messageController.js"

// enrutador para utilizar las diferentes rutas del programa
const messageRouter = Router()

//listar todos los msgs del chat
messageRouter.get('/', messageController.findAll)

//añadir un nuevo mensaje
messageRouter.post('/', messageController.save)

export default messageRouter