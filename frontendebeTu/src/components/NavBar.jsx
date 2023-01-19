import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="flex gap-4 mb-4 ">
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/users">Usuarios</Link>
        </nav>
    )
}

export default NavBar