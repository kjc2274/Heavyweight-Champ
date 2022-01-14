import api from "../services/apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Game from "./Game";
import HelpButton from "./HelpButton";

export default function BoxingRing() {
    const [fighter, setFighter] = useState([]);
    const[yourHealth, setYourHealth] = useState(10);
    const[compHealth, setCompHealth] = useState(10);
    const [visible, setVisible] = useState(false);
    const myClass = "ring-help " + (visible ? "show" : "hide");
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
            <div id="fight-card">
                <div>
                    <h3>You</h3>
                    <h3>HP: {yourHealth}</h3>
                </div>
                <div>
                    <h3>{fighter.fields.name}</h3>
                    <h3>HP: {compHealth}</h3>
                </div>
            </div>
            <div id="ring">
                <div>
                    <img style={{height: "200px", width: "200px", borderRadius: "100%"}} src={fighter.fields.image} alt={fighter.fields.name}/>
                </div>
            </div>
                <div>
                    <HelpButton setVisible={setVisible}/>
                    <Game
                    compName={fighter.fields.name} 
                    compHealth={compHealth} 
                    setCompHealth={setCompHealth} 
                    yourHealth={yourHealth}
                    setYourHealth={setYourHealth}
                    />
                </div>
                <p className={myClass}>
                    'Jab' will always do one point of damage. 'Cross' does two points of damage if your opponent chooses
                    'jab' or 'cross' as well, but takes two points of damage if they choose 'defend'. 'Taunt' takes away
                    the 'jab' option, and it makes 'cross' and 'defend' do more damage if they connect. If you both defend,
                    are forced to throw a punch and hope for the best.
                </p>
        </div>
    )
}

                // <div>
                //     <img style={{height: "20vh", borderRadius: "100%"}} src="https://www.emojirequest.com/images/BoxingEmoji.jpg" alt="Your Avatar" />
                //     <h3>You</h3>
                //     <h3>HP: {yourHealth}</h3>
                // </div>