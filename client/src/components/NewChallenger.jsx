import { useState } from "react";
import api from "../services/apiConfig";
import { useNavigate } from "react-router-dom";

const default_input = {
    name: "",
    hp: 10,
    image: "https://image.similarpng.com/very-thumbnail/2020/07/Expressionless-emoji-Face-on-transparent-PNG.png",
}


export default function NewChallenger() {
    const [input, setInput] = useState(default_input);
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
        </div>
    )
}
