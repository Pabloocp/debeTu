async function functionfetchAllUsers(){
    const response = await fetch("http://localhost:3000/user/")
    const json = await response.json()
    return json
}

async function addNewUser(user,passwd){
    const response = await fetch("http://localhost:3000/user/",
    {method: 'POST',
    headers:{"Content-type":"application/json"},
    body: JSON.stringify({user,passwd})
    })
    if(!response.ok){
        console.log("error al introducir datos")
    }
    const newUser= await response.json()
    return newUser
}


export {functionfetchAllUsers,addNewUser}