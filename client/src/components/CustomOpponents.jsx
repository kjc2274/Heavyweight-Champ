import api from "../services/apiConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CustomOpponents() {
    const [fighters, setFighters] = useState([]);

    useEffect(()=>{
        const fetchFighters = async () => {
            const res = await api.get();
            console.log(res.data.records);
            setFighters(res.data.records);
        }
        fetchFighters();
    }, [])

    return (
        <div>
            <h2>Custom Opponents</h2>
            <ul>
                {fighters.map((fighter)=>{
                    return(
                        <li key={fighter.id}>
                            <Link to={`/ring/${fighter.id}`}>
                            <div>
                                <img style={{ height: "20vh"}} src={fighter.fields.image} alt={fighter.fields.name}/>
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
