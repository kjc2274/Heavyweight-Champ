import { toast } from 'react-toastify'

export default function Taunt(props) {
    const {disable, setDisable} = props;
    const taunts = ["Come and get some!","Yo Mama!", "First time boxing?"];

const handleTaunt = () => {
    setDisable(true);
    let taunt = taunts[Math.floor(Math.random() * taunts.length)];
    toast(taunt, {
        position: "top-left",
        autoClose: 2000,
    });
    console.log(taunt);
}
    
    return (
        <div >
            <button disabled={disable} onClick={handleTaunt}>Taunt</button>            
        </div>
    )
}
