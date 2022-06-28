import React, { useState, useRef, useEffect } from 'react';

import './Controller.css'

import { FaAngleLeft } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import { FaPlay } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Controllers = (props) => {

    //states
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [loop, setLoop] = useState(false);
    const [music, setMusic] = useState("");


    //refferences
    const audioPlayer = useRef(HTMLAudioElement); //reff for audio player
    const progressBar = useRef(HTMLElement);
    const animationRef = useRef(HTMLElement);

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
        setMusic(props.music.musicPath);
        audioPlayer.current.play();
        setIsPlaying(true);
    }, [audioPlayer.current.loadedmeta, audioPlayer.current.readyState, setMusic]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {

        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }
    const audioLoop = () => {
        const prevLoopValue = loop;
        setLoop(!prevLoopValue)
        audioPlayer.current.loop = prevLoopValue;
        console.log(prevLoopValue);

    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        requestAnimationFrame(whilePlaying);
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--sek-before-width', `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 30);
        changeRange();
    }

    const type = props.music.type;

    let renderEl;

    if (type !== "Radio") {
        renderEl = (
            <div className="prog-time">
                <p >{calculateTime(currentTime)}</p>
                <p >{isNaN(duration) ? `00:00` : calculateTime(duration)}</p>
            </div>
        )
    }
    else {
        renderEl = (
            <div className="prog-time">
                <p >{calculateTime(currentTime)}</p>
                <p >onAir Radio</p>
            </div>
        )
    }


    return (
        <div className='controllers'>
            <div className="songInfo">
                <h4>{props.music.radioName}</h4>
                <p>{props.music.type}</p>
            </div>

            <div className="prog">
                {renderEl}
                <div>
                    <input className='progressBar' ref={progressBar} defaultValue="0" onChange={changeRange} type="range"></input>
                </div>
                <div className="prog-bar">
                    <audio ref={audioPlayer}
                        src={props.music.radioURL}
                        preload='metadata' >
                    </audio>
                </div>
            </div>
            <div className='buttons'>
                <button onClick={audioLoop} style={{ backgroundColor: `${loop ? "orange" : "white"}` }}><FaRandom /></button>
                <button onClick={backThirty}><small>30</small><FaAngleLeft /></button>
                <button onClick={togglePlayPause} className="bounceIn"
                    style={{ width: "3.5rem", height: "3.5rem", fontSize: "18px" }}>
                    {isPlaying ? <FaPlay /> : <FaPause />}
                </button>
                <button onClick={forwardThirty}><FaAngleRight /><small>30</small></button>
                <button onClick={audioLoop} style={{ backgroundColor: `${loop ? "orange" : "white"}` }}><FaSync /></button>
            </div>
        </div >
    )
}

export default Controllers;