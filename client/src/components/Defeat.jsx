import { Link } from "react-router-dom"

export default function Defeat() {
    return (
        <div>
            <div>
                <img style={{height: '50vh', borderRadius: "25%"}} src="https://www.thefightcity.com/wp-content/uploads/2017/11/marciano-walcott-KO-punch-round-13-featured.jpg" alt="KO" />
            </div>
            <Link to="/"><h2>You Lose!</h2></Link>
        </div>
    )
}
