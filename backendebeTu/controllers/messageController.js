import * as messageService from "../services/messageService.js"
const findAll = async(req,res) => {
    try {
        const messages = await messageService.findAll()
        res.status(200).json(messages)
        
      } catch (error) {
        res.status(500).json({message:'No se han podido listar tus mensajes :('})
      }
}

const save = async(req,res) => {
        try {
        const data = req.body
        const msgSave = await messageService.save(data)
        res.status(200).json(msgSave)
    } catch (error) {
        res.status(500).json({message:'Error al crear el nuevo mensaje :(' + error})
    }
}

export {findAll, save}