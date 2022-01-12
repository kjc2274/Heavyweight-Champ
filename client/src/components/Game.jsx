import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Taunt from "./Taunt";
import { useNavigate } from "react-router-dom";

export default function Game(props) {
    const choices = ["jab", "cross", "defend"];
    const [playerChoice, setPlayerChoice] = useState("");
    const [compChoice, setCompChoice] = useState();
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();


    const {yourHealth, setYourHealth, compHealth, setCompHealth} = props;

    const compRandomChoice = () => {
        setCompChoice(choices[Math.floor(Math.random() * choices.length)]);
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
            toast("Someone throw a punch!", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }, [playerChoice, compChoice])

    useEffect(()=>{
        if(compHealth === 0){
            navigate("/victory")
        }else if(yourHealth === 0){
            navigate("/defeat")
        }
    },[yourHealth, compHealth])

    return (
            
        <div>
            <Taunt disable={disable} setDisable={setDisable}/>
            <button onClick={() => handleClick("jab")}>Jab</button>
            <button onClick={() => handleClick("cross")}>Cross</button>
            <button onClick={() => handleClick("defend")}>Defend</button>
        </div>
    )
}
