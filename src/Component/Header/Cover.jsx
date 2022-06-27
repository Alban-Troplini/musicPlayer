
import React, { useEffect } from "react";
import Controllers from "../Control_Bar/Controllers";
import { useSelector } from "react-redux";
import "./Cover.css"
import vinyl from "../../image/vinyl1.png";


const Cover = () => {

    const musicPlaying = useSelector((state) => state.musicPlaying)



    return (

        <div className="coverSection">
            <div className="cover" >
                <div className="cover-image">
                    <img src={musicPlaying.radioImg} alt="Icon" style={{ width: 130, padding: 15 }} />
                </div>
                <img className="vinyl" src={vinyl} alt="MusicImage" />
            </div>
            <div>
                <Controllers music={musicPlaying} />
            </div>
        </div>
    )

}

export default Cover;