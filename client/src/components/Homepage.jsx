import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div>
            <div>
                <Link to="/select">Fight</Link>
            </div>
            <div>
                <Link to = "/create-fighter">Create Custom Opponent</Link>
            </div>
        </div>
    )
}
