import api from "../services/apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BoxingRing() {
    const [fighter, setFighter] = useState([]);
    const[yourHealth, setYourHealth] = useState(10);
    const {id} = useParams();

    useEffect(()=>{
        const fetchFighters = async () => {
            const res = await api.get(`/${id}`);
            console.log(res.data)
            setFighter(res.data);
        }
        fetchFighters();
    }, [])

    if(!fighter.fields){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h2>Fight!</h2>
        <div id="ring">
            <div>
                <img style={{height: "20vh"}} src="https://www.emojirequest.com/images/BoxingEmoji.jpg" alt="Your Avatar" />
                <h3>You</h3>
                <h3>HP: {yourHealth}</h3>
            </div>
            <div>
                <img style={{height: "20vh"}} src={fighter.fields.image} alt={fighter.fields.name}/>
                <h3>{fighter.fields.name}</h3>
                <h3>HP: {fighter.fields.hp}</h3>
            </div>
        </div>
            <div>
                <button>Jab</button>
                <button>Cross</button>
                <button>Defend</button>
            </div>
        </div>
    )
}
