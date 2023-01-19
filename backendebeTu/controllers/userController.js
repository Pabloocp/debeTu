import * as userService from "../services/userService.js"
const findAll = async(req,res) => {
    try {
        const users = await userService.findAll()
        res.status(200).json(users)
        
      } catch (error) {
        res.status(500).json({message:'No se han podido listar los usuarios :('})
      }
}

const save = async(req,res) => {
        try {
        const data = req.body
        const userSave = await userService.save(data)
        res.status(200).json(userSave)
    } catch (error) {
        res.status(500).json({message:'Error al crear el nuevo user :(' + error})
    }
}

export {findAll, save}