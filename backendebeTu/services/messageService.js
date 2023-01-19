import { Message } from "../models/msg.js"

//desacomplamos las funciones de bbdd del index

const findAll = async() => await Message.find()

const save = async(data) => {
    const newMsg = new Message(data)
    return await newMsg.save()
}

export {findAll,save}