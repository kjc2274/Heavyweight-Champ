import { toast } from 'react-toastify'

export default function Taunt(props) {
    const {disable, setDisable} = props;
    const taunts = ["Come and get some!","Yo Mama!", "First time boxing?", "Your shoe's untied...", "You won't"];

const handleTaunt = () => {
    setDisable(true);
    let taunt = taunts[Math.floor(Math.random() * taunts.length)];
    toast(`You: ${taunt}`, {
        position: "top-left",
        autoClose: 2000,
        theme: 'light',
    });
    console.log(taunt);
}
    
    return (
        <div >
            <button disabled={disable} onClick={handleTaunt}>Taunt</button>            
        </div>
    )
}
