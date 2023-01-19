async function functionfetchAllMsg(){
    const response = await fetch("http://localhost:3000/msg/")
    const json = await response.json()
    return json
}

async function addNewMessage(data){
    const response = await fetch("http://localhost:3000/msg/",
    {method: 'POST',
    headers:{"Content-type":"application/json"},
    body: JSON.stringify(data)
    })
    if(!response.ok){
        console.log("error al introducir datos")
    }
    const newMSG= await response.json()
    return newMSG
}


export {functionfetchAllMsg,addNewMessage}