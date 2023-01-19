import { useEffect } from "react"
import { useState } from "react"
import { addNewUser, functionfetchAllUsers } from "../services/userService"

const Users = () =>{
    const [ users,setUsers] = useState([])
    const [ usr,setUsr] = useState("")
    const [ pass,setPass] = useState("")
    
     async function getUsers(){
            const json = await functionfetchAllUsers()
            setUsers(json)
        }
       
    useEffect( ()=>{ 
        getUsers()
    } ,  [] )

    useEffect( ()=>{
        setInterval( getUsers ,   2000  )
    } ,  [] )

    const handleSubmit = async(e) => {
        e.preventDefault()
        const newUsusario = await addNewUser({usr},{pass})
        console.log(newUsusario)
        setUsers([...users,newUsusario])
        setUsr("")
        setPass("")
      
       }

    return (
        <>
        <div className="flex gap-2 p-2 mr-4 ">
        <div className="border-2 rounded-md border-black p-4">
        <h2 className="text-xl">Lista Usuarios</h2>
         {users.map(usr => <div key={usr.id}>Email: {usr.email} // Contraseña:{usr.passwd}</div>)}
        </div>
       <div>

       </div>
       <div className="flex flex-col border-2 p-4 rounded-md border-black">
       <h2 className="text-xl">Nuevo Usuario</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mb-2">
            Usuario<input type="text" name="user" className="rounded-md border border-black" value={usr} onChange={(e) => setUsr(e.target.value)} />
            Contraseña<input type="text" name="passw" className="rounded-md border border-black" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button type="submit" className="mt-4 rounded-full bg-green-300">Registrarme</button>
        </form>
       </div>
       
        </div>
      
        </> 
        )
}

export default Users