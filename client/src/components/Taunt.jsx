

export default function Taunt() {
    const taunts = ["Come and get some!","Yo Mama!", "First time boxing?"];
    let taunt = taunts[Math.floor(Math.random() * taunts.length)];
    console.log(taunt);
    return (
        <div style={{display: "fixed"}}>
            <h2>{taunt}</h2>            
        </div>
    )
}
