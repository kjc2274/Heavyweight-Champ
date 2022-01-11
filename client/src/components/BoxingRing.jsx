import api from "../services/apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BoxingRing() {
    const[yourHealth, setYourHealth] = useState(0);
    const {id} = useParams();

    return (
        <div>
            <h2>Fight!</h2>
            <div>
                <img style={{height: "20vh"}} src="https://www.emojirequest.com/images/BoxingEmoji.jpg" alt="Your Avatar" />
                <h3>You</h3>
                <h3>HP: {yourHealth}</h3>
            </div>
        </div>
    )
}
