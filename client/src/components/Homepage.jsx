import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div id="homepage">
            <div>
                <Link to="/select">
                    <img className="homeImage" src="https://freerangestock.com/sample/116676/boxing-match-silhouette-.jpg" alt="boxing silhouette"/>
                    <h3>Fight</h3>
                </Link>
            </div>
            <div>
                <Link to = "/create-fighter">
                <img className="homeImage" src="https://freerangestock.com/sample/116066/boxing-silhouette-.jpg" alt="boxing silhouette"/>
                    <h3>Create Custom Opponent</h3>
                </Link>
            </div>
        </div>
    )
}
