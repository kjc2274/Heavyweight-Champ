import api from "../services/apiConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CustomOpponents() {
    const [fighters, setFighters] = useState([]);

    useEffect(()=>{
        const fetchFighters = async () => {
            const res = await api.get("/?view=Grid+view");
            setFighters(res.data.records);
        }
        fetchFighters();
    }, [])

    return (
        <div>
            <h2>Choose Your Opponent</h2>
            <ul id="customList">
                {fighters.map((fighter)=>{
                    return(
                        <li className="fighterCard" key={fighter.id}>
                            <Link to={`/ring/${fighter.id}`}>
                            <div>
                                <img style={{ height: "20vh", borderRadius: "100%"}} 
                                src={fighter.fields.image} 
                                alt={fighter.fields.name}/>
                                <h3>{fighter.fields.name}</h3>
                                <h4>{fighter.fields.hp}</h4>
                            </div>
                            </Link>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}
