import { model, Schema } from "mongoose";


let userchema = new Schema(
    {
        email:{type: String, required: true, trim:true},
        passwd:{type: String, required: true, trim:true}
    }
    
)


const User = model("User",userchema)

export {User}