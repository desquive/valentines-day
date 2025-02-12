import myImage from "../images/closed.png";
import closed from "../images/closedEnv.png";
import openEnv from "../images/openEnv.png";
import {useState} from "react";

function Envelope(){
    const [imageSrc, setImageSrc] = useState(closed);
    const [imageWidth, setImageWidth] = useState("400")

    function openEnvelope(){
        if(imageSrc === closed){
            setImageSrc(openEnv)
            setImageWidth("500")
        }
    }

    return(
        <div>
            <img src={imageSrc} alt="envelope" width={imageWidth} onClick={openEnvelope}/>
        </div>
    )
}

export default Envelope;