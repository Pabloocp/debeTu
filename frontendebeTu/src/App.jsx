import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Messages from './components/Messages'
import Saludo from './components/Saludo' 
import NavBar from './components/NavBar'
import Users from './components/Users'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Saludo/>}></Route>
      <Route path='/chat' element={<Messages/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
