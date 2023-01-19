import { User } from "../models/User.js"

//desacomplamos las funciones de bbdd del index

const findAll = async() => await User.find()

const save = async(data) => {
    const newUser= new User(data)
    return await newUser.save()
}

export {findAll,save}