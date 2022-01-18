import api from "../services/apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Game from "./Game";
import HelpButton from "./HelpButton";
import { Howl } from "howler";
import bell from "../audioclips/bell.mp3";

export default function BoxingRing() {
    const [fighter, setFighter] = useState([]);
    const[yourHealth, setYourHealth] = useState(10);
    const[compHealth, setCompHealth] = useState(10);
    const [visible, setVisible] = useState(false);
    const myClass = "ring-help " + (visible ? "show" : "hide");
    const {id} = useParams();

    let sound = new Howl({
        src: [bell],
        volume: 0.5,
      });
      
      
      

    useEffect(()=>{
        const fetchFighter = async () => {
            const res = await api.get(`/${id}`);
            setFighter(res.data);
            setCompHealth(res.data.fields.hp);
        }
        fetchFighter();
        sound.play();
        // eslint-disable-next-line
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
                <p className={myClass}>
                    "Jab", "Cross", and "Defend" work with a basic rock-paper-scissors gameplay logic. "Cross" beats 
                    "Jab", "Jab" beats "Defend", and "Defend" beats "Cross". Ties on "Jab" and "Cross" cause both you and 
                    your opponent to take damage, but ties on "Defend" cause you to lose the ability to choose "Defend" for
                    your next action. Taunting your opponent takes away the "Jab" option, and increases the damage taken
                    or received on your next action.
                </p>
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
        </div>
    )
}
