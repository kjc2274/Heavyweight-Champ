import api from "../services/apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Game from "./Game";

export default function BoxingRing() {
    const [fighter, setFighter] = useState([]);
    const[yourHealth, setYourHealth] = useState(10);
    const[compHealth, setCompHealth] = useState(10);
    const {id} = useParams();

    useEffect(()=>{
        const fetchFighter = async () => {
            const res = await api.get(`/${id}`);
            setFighter(res.data);
            setCompHealth(res.data.fields.hp);
        }
        fetchFighter();
    }, [])

    if(!fighter.fields){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h2>Fight!</h2>
        <div id="ring">
            <div>
                <img style={{height: "20vh", borderRadius: "100%"}} src="https://www.emojirequest.com/images/BoxingEmoji.jpg" alt="Your Avatar" />
                <h3>You</h3>
                <h3>HP: {yourHealth}</h3>
            </div>
            <div>
                <img style={{height: "20vh", borderRadius: "100%"}} src={fighter.fields.image} alt={fighter.fields.name}/>
                <h3>{fighter.fields.name}</h3>
                <h3>HP: {compHealth}</h3>
            </div>
        </div>
            <div>
                <Game
                compName={fighter.fields.name} 
                compHealth={compHealth} 
                setCompHealth={setCompHealth} 
                yourHealth={yourHealth}
                setYourHealth={setYourHealth}
                />
            </div>
        </div>
    )
}
