import { Router } from "express";
import * as userController from "../controllers/userController.js"

// enrutador para utilizar las diferentes rutas del programa
const userRouter = Router()

//listar los usuarios
userRouter.get('/', userController.findAll)

//añadir un nuevo user al sistema
userRouter.post('/', userController.save)

export default userRouter