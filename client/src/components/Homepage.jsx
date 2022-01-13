import { Link } from "react-router-dom";
import HelpButton from "./HelpButton";
import { useState } from "react";

export default function Homepage() {
    const [visible, setVisible] = useState(false);
    const myClass = "homepage-help " + (visible ? "show" : "hide");
    return (
        <div id="homepage">
            <HelpButton setVisible={setVisible}/>
            <div>
                <Link to="/fighters">
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
            <p className={myClass}>
                Do you have what it takes to be the next heavyweight champ?
            </p>
        </div>
    )
}
