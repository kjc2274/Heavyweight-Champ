import { Link } from "react-router-dom";
import HelpButton from "./HelpButton";
import { useState } from "react";

export default function Homepage() {
    const [visible, setVisible] = useState(false);
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
            <div className={visible ? "show-div" : "hide-div"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Totam necessitatibus laudantium officiis accusantium suscipit pariatur harum placeat, 
                consequuntur quae quam explicabo. Dignissimos magni repellendus nulla ut corporis. 
                Eveniet, id accusantium?
            </div>
        </div>
    )
}
