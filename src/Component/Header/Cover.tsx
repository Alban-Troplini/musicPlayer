
import React from "react";
import Controllers from "../Control_Bar/Controllers";

import "./Cover.css"
import vinyl from "../../image/vinyl1.png"
import garrix from "../../image/Martin-Garrix-Logo (1).png"

const Cover = () => {

    return (
        
        <div className="coverSection">
            <div className="cover" >
            <div className="cover-image">
                <img src={garrix} alt="Icon" style={{width: 150, marginTop: 30}}/>
            </div>
            <img className="vinyl" src={vinyl} alt="MusicImage" />
        </div>
        <div>
            <Controllers />
        </div>
        </div>
    )
    
}

export default Cover;