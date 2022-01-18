import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Taunt from "./Taunt";
import { useNavigate } from "react-router-dom";

export default function Game(props) {
    const choices = ["jab", "cross", "defend"];
    const [playerChoice, setPlayerChoice] = useState("");
    const [compChoice, setCompChoice] = useState("");
    const [disable, setDisable] = useState(false);
    const [disableDef, setDisableDef] = useState(false);
    const [cross, setCross] = useState(false);
    const [jab, setJab] = useState(false);
    const [block, setBlock] = useState(false);
    const [visiblePunch, setVisiblePunch] = useState(false);
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
       setDisableDef(false);
       let timeout = null;
       let timeout2 = null;

        if(playerChoice === "jab" && compChoice === "jab"){
            setJab(true);
            timeout = setTimeout(() => {setJab(false)}, 120);
            setVisiblePunch(true);
            timeout2 =setTimeout(() => {setVisiblePunch(false)}, 300);
            setCompHealth(compHealth - 1);
            setYourHealth(yourHealth -1);
            toast("You exchange jabs!", {
                position: "top-center",
                autoClose: 2000,
            });
        }else if(playerChoice === "jab" && compChoice === "cross"){
            setVisiblePunch(true);
            timeout =setTimeout(() => {setVisiblePunch(false)}, 600);
            setYourHealth(yourHealth - 1);
            toast(`${compName} connects with a cross!`, {
                position: "top-center",
                autoClose: 2000,
            });
        }else if(playerChoice === "jab" && compChoice === "defend"){
            setJab(true);
            timeout = setTimeout(() => {setJab(false)}, 120);
            setCompHealth(compHealth - 1);
            toast(`You jab at ${compName}'s defense!`, {
                position: "top-center",
                autoClose: 2000,
            });
        }else if(playerChoice === "cross" && compChoice === "jab"){
            setCross(true);
            timeout =setTimeout(() => {setCross(false)}, 250);
            if(disable === false){
            setCompHealth(compHealth - 1);
            toast(`You hit ${compName} with a cross!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }else{
                setCompHealth(compHealth - 2);
                toast(`You hook around ${compName}'s jab!`, {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        }else if(playerChoice === "cross" && compChoice === "cross"){
            setCross(true);
            timeout = setTimeout(() => {setCross(false)}, 250);
            setVisiblePunch(true);
            timeout2 = setTimeout(() => {setVisiblePunch(false)}, 600);
            if(disable === false){
                setCompHealth(compHealth - 1);
                setYourHealth(yourHealth - 1);
                toast("You exhchange crossing blows!", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }else{
                setCompHealth(compHealth - 2);
                setYourHealth(yourHealth - 2);
                toast("You kinda asked for this!", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }           
        }else if(playerChoice === "cross" && compChoice === "defend"){
            setVisiblePunch(true);
            timeout = setTimeout(() => {setVisiblePunch(false)}, 600);
            if(disable === false){
            setYourHealth(yourHealth - 1);
            toast(`${compName} counters your cross!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }else{
                setYourHealth(yourHealth - 2);
                toast(`${compName} easily counters your desperate attack!`, {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        }else if(playerChoice === "defend" && compChoice === "jab"){
            setBlock(true);
            timeout = setTimeout(() => {setBlock(false)}, 1000);
            setVisiblePunch(true);
            timeout2 = setTimeout(() => {setVisiblePunch(false)}, 300);
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
            setCross(true);
            timeout = setTimeout(() => {setCross(false)}, 250);
            if(disable === false){
            setCompHealth(compHealth - 1);
            toast(`You counter ${compName}'s cross!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }else{
                setCompHealth(compHealth - 2);
                toast(`You counter ${compName}'s furious attack!`, {
                position: "top-center",
                autoClose: 2000,
            });
            }
        }else if(playerChoice === "defend" && compChoice === "defend"){
            setBlock(true);
            timeout = setTimeout(() => {setBlock(false)}, 1000);
            if(disable === false){
                setDisableDef(true);
            toast("Someone throw a punch!", {
                position: "top-center",
                autoClose: 2000,
            });
            }else{
                toast("You stumble and look like a fool!", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        }
        return () =>{
            clearTimeout(timeout);
            clearTimeout(timeout2);
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
             <div  className={(visiblePunch? "show" : "hide")}>
                <img id="hit" src="https://pngimg.com/uploads/boxing_gloves/boxing_gloves_PNG102638.png" alt="boxing glove up close" />
            </div>
            <div id="gloves" >
                    <div id={(jab ? "jab" : null)} className={(block ? "block" : null)}>
                        <img 
                        id="left-glove"
                        className="glove"
                        src="https://assets.stickpng.com/images/580b585b2edbce24c47b2ae8.png"
                        // src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/14710/boxing-glove-sports-clipart-md.png" 
                        alt="boxing glove" 
                        />
                    </div>
                    <div id={(cross ? "cross" : null)} className={(block ? "block" : null)}>
                        <img 
                        id="right-glove"
                        className="glove"
                        src="https://assets.stickpng.com/images/580b585b2edbce24c47b2ae8.png"
                        // src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/14710/boxing-glove-sports-clipart-md.png" 
                        alt="boxing glove" 
                        />
                    </div>
            </div>            
            <div id="game-buttons">
                <Taunt disable={disable} setDisable={setDisable}/>
                <button className="button" disabled={disable} onClick={() => handleClick("jab")}>Jab</button>
                <button className="button" onClick={() => handleClick("cross")}>Cross</button>
                <button className="button" disabled={disableDef} onClick={() => handleClick("defend")}>Defend</button>
            </div>
        </div>
    )
}
