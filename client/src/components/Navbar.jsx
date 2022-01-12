import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Heavyweight Champ</h1>
            <Link id="homeLink" to="/">Home</Link>
        </div>
    )
}
