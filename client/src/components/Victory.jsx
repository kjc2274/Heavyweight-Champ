import { Link } from "react-router-dom"

export default function Victory() {
    return (
        <div>
            <div id="victory-image">
            <img style={{height: "50vh"}} src="https://image.shutterstock.com/image-photo/boxer-celebrating-win-on-dark-260nw-1916529434.jpg" alt="Victorious Boxer" />
            </div>
            <Link to= "/"><h2>Victory!</h2></Link>
        </div>
    )
}
