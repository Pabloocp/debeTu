import { useEffect } from "react"
import { useState } from "react"
import { addNewMessage, functionfetchAllMsg } from "../services/messageService"

const Messages = () =>{
    const [ messages,setMessages] = useState([])
    const [ msg,setMsg] = useState("")
    
     async function getMsgs(){
            const json = await functionfetchAllMsg()
            setMessages(json)
        }
       
    useEffect( ()=>{ 
        getMsgs()
    } ,  [] )

    useEffect( ()=>{
        setInterval( getMsgs ,   2000  )
    } ,  [] )

    const handleSubmit = async(e) => {
        e.preventDefault()
        const newMessage = await addNewMessage({msg})
        console.log(newMessage)
        setMessages([...messages,newMessage])
        setMsg("")
      
       }

    return (
        <>
         <h1>Lista de mensajes del chat:</h1>
         {messages.map(msg => <div key={msg.id}>{msg.msg}</div>)}
             
        <form onSubmit={handleSubmit}>
            <input type="text" name="msg" value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
        </> 
        )
}

export default Messages