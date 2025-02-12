import './style.css'
import Envelope from "./components/Envelope";
import {useRef, useState} from "react";
import Hearts from "./components/Hearts";
import ToFrom from "./components/ToFrom";

function App(){
    const divRef = useRef(null)
    const [msg, setMsg] = useState("Click envelope to see a nice message...")
    const [showHeart, setShowHeart] = useState(false)
    const [toFrom, setToFrom] = useState(false)

    const handleClick = () => {
        if (divRef.current){
            divRef.current.style.backgroundColor = "lightpink"
        }
        setMsg("Will you be my Valentine?")
        setShowHeart(true)
        setToFrom(true)
    }

    return (
        <div id="background" ref={divRef}>
            <div className="message-body">
                {showHeart && <Hearts/>}
                {msg}
                <div onClick={handleClick}>
                    <Envelope/>
                </div>
            </div>
            {toFrom && <ToFrom/>}
        </div>
    );
}

export default App;