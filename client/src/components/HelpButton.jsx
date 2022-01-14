
export default function HelpButton(props) {
    

    const handleToggle = ()=>{
        props.setVisible((prevState) => !prevState)
    }

    return <button id="help-button" onClick={handleToggle} >Instructions</button>
}
