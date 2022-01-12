import { useState, useEffect } from "react";
import Taunt from "./Taunt";

export default function Game(props) {
    const choices = ["jab", "cross", "defend"];
    const [playerChoice, setPlayerChoice] = useState("");
    const [compChoice, setCompChoice] = useState();
    const [disable, setDisable] = useState(false); 

    const {yourHealth, setYourHealth, compHealth, setCompHealth} = props;

    const compRandomChoice = () => {
        setCompChoice(choices[Math.floor(Math.random() * choices.length)]);
    }
    const handleTaunt = () =>{
        setDisable(true);
        const taunts = ["Come and get some!","Yo Mama!", "First time boxing?"];
        let taunt = taunts[Math.floor(Math.random() * taunts.length)];
        console.log(taunt);
        <h2>{taunt}</h2>
    }
        
    const handleClick = (choice) => {
        setPlayerChoice(choice);
        compRandomChoice();
    }

    useEffect(() => {
       setDisable(false);

        if(playerChoice === "jab" && compChoice === "jab"){
            setCompHealth(compHealth - 1);
            setYourHealth(yourHealth -1);
        }else if(playerChoice === "jab" && compChoice === "cross"){
            setCompHealth(compHealth - 1);
            setYourHealth(yourHealth - 2);
        }else if(playerChoice === "jab" && compChoice === "defend"){
            setCompHealth(compHealth - 1);
        }else if(playerChoice === "cross" && compChoice === "jab"){
            setCompHealth(compHealth - 2);
            setYourHealth(yourHealth -1);
        }else if(playerChoice === "cross" && compChoice === "cross"){
            setCompHealth(compHealth - 2);
            setYourHealth(yourHealth - 2);
        }else if(playerChoice === "cross" && compChoice === "defend"){
            setYourHealth(yourHealth - 3);
        }else if(playerChoice === "defend" && compChoice === "jab"){
            setYourHealth(yourHealth -1);
        }else if(playerChoice === "defend" && compChoice === "cross"){
            setCompHealth(compHealth - 3);
        }else if(playerChoice === "defend" && compChoice === "defend"){
            alert("Someone throw a punch!")
        }
    }, [playerChoice, compChoice])

    return (
            
        <div>
            <button disabled={disable} onClick={handleTaunt}>Taunt</button>
            <button onClick={() => handleClick("jab")}>Jab</button>
            <button onClick={() => handleClick("cross")}>Cross</button>
            <button onClick={() => handleClick("defend")}>Defend</button>
        </div>
    )
}
