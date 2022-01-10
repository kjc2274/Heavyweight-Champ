import { Link } from "react-router-dom"

export default function Difficulty() {
    return (
        <div>
            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
            <Link to="/fighters"><button>Custom</button></Link>
        </div>
    )
}
