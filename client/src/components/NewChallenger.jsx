import { useState } from "react";
import api from "../services/apiConfig";
import { useNavigate } from "react-router-dom";

const default_input = {
    name: "",
    hp: 0,
    image: "",
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
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input id="name" value={input.name} placeholder='Full Name' onChange={handleTextInput}/>
                <br />
                <label>HP:</label>
                <input id="hp" type="number" value={input.hp} placeholder='Hit Points' onChange={handleNumberInput}/>
                <br />
                <label>Image:</label>
                <input id="image" value={input.image} placeholder='Add a URL(optional)' onChange={handleTextInput}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
