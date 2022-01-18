import { useState } from "react";
import api from "../services/apiConfig";
import { useNavigate } from "react-router-dom";
import HelpButton from "./HelpButton";

const default_input = {
    name: "",
    hp: 10,
    image: "https://www.emojirequest.com/images/BoxingEmoji.jpg",
}


export default function NewChallenger() {
    const [input, setInput] = useState(default_input);
    const [visible, setVisible] = useState(false);
    const myClass = "create-help " + (visible ? "show" : "hide");
    const navigate = useNavigate();

    const handleTextInput = (event) =>{
        const {id, value} = event.target;
        setInput((prevInput)=>({
            ...prevInput,
            [id]: value,
        }))
    }


    const handleNumberInput = (event) => {
        const {id, valueAsNumber} = event.target;
        setInput((prevInput)=>({
            ...prevInput,
            [id]: valueAsNumber,
        }))
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const fields = input;
        await api.post("/", {fields});
        setInput(default_input);
        navigate("/");
    }

    return (
        <div>
            <HelpButton setVisible={setVisible}/>
            <h2>Create Custom Opponent</h2>
            <form id="custom-form" onSubmit={handleSubmit}>
                <label>Name:</label><br/>
                <input id="name" value={input.name} placeholder='Full Name' onChange={handleTextInput} required/>
                <br />
                <label>HP:</label><br/>
                <input id="hp" type="number" value={input.hp} placeholder='Hit Points' onChange={handleNumberInput} min="0" required/>
                <br />
                <label>ImageURL<br/>(optional):</label><br/>
                <input id="image" value={input.image} placeholder='Add a URL(optional)' onChange={handleTextInput}/>
                <br />
                <button>Submit</button>
            </form>
            <p className={myClass}>
                You must provide your fighter with a name. You may leave the "HP" and "ImageURL" fields in their 
                default state, or change them as you so desire.
            </p>
        </div>
    )
}
