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


    const {yourHealth, setYourHealth, compHealth, setCompHealth, compName} = props;

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
            toast("You exchange jabs!", {
                position: "top-center",
                autoClose: 2000,
            });
        }else if(playerChoice === "jab" && compChoice === "cross"){
            setCompHealth(compHealth - 1);
            setYourHealth(yourHealth - 2);
            toast(`${compName} connects with a cross!`, {
                position: "top-center",
                autoClose: 2000,
            });
        }else if(playerChoice === "jab" && compChoice === "defend"){
            setCompHealth(compHealth - 1);
            toast(`You jab at ${compName}'s defense!`, {
                position: "top-center",
                autoClose: 2000,
            });
        }else if(playerChoice === "cross" && compChoice === "jab"){
            if(disable === false){
            setCompHealth(compHealth - 2);
            setYourHealth(yourHealth -1);
            toast(`You hit ${compName} with a cross!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }else{
                setCompHealth(compHealth - 3);
                setYourHealth(yourHealth - 1);
                toast(`You hook around ${compName}'s jab!`, {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        }else if(playerChoice === "cross" && compChoice === "cross"){
            if(disable === false){
                setCompHealth(compHealth - 2);
                setYourHealth(yourHealth - 2);
                toast("You exhchange crossing blows!", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }else{
                setCompHealth(compHealth - 3);
                setYourHealth(yourHealth - 2);
                toast("You throw a desperate haymaker!", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }           
        }else if(playerChoice === "cross" && compChoice === "defend"){
            if(disable === false){
            setYourHealth(yourHealth - 2);
            toast(`${compName} counters your cross!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }else{
                setYourHealth(yourHealth - 4);
                toast(`${compName} easily counters your desperate attack!`, {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        }else if(playerChoice === "defend" && compChoice === "jab"){
            if(disable === false){
            setYourHealth(yourHealth -1);
            toast(`You defend against ${compName}'s jab!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }else{
                setYourHealth(yourHealth -2);
                toast(`${compName}'s jab breaks your guard!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }
        }else if(playerChoice === "defend" && compChoice === "cross"){
            if(disable === false){
            setCompHealth(compHealth - 2);
            toast(`You counter ${compName}'s cross!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }else{
                setCompHealth(compHealth - 4);
                toast(`You counter ${compName}'s furious attack!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }
        }else if(playerChoice === "defend" && compChoice === "defend"){
            toast("Someone throw a punch!", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }, [playerChoice, compChoice])

    useEffect(()=>{
        if(compHealth <= 0){
            navigate("/victory")
        }else if(yourHealth <= 0){
            navigate("/defeat")
        }
    },[yourHealth, compHealth])

    return (
            
        <div>
            <Taunt disable={disable} setDisable={setDisable}/>
            <button disabled={disable} onClick={() => handleClick("jab")}>Jab</button>
            <button onClick={() => handleClick("cross")}>Cross</button>
            <button onClick={() => handleClick("defend")}>Defend</button>
        </div>
    )
}
