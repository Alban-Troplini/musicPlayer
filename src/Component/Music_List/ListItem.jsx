import React, { useEffect } from 'react';

import './ListItem.css';
import { FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';


const ListItem = ({ ...item }) => {

    // useEffect(() => {
    //     console.log(item.radio)
    // }, []);

    const a = useSelector((state) => state.musicPlaying);
    const dispatch = useDispatch();

    const playSelected = (item) => {
        dispatch({ type: "SELECTED", payload: item.radio });
    };

    return (
        <div>
            <div className='item animate__animated animate__bounce'>
                <img src={item.radio.radioImg} alt="Song Image" className='image' />
                <div className='description'>
                    <h4>{item.radio.radioName}</h4>
                    <p>description </p>

                </div>
                <button
                    style={{ width: "2rem", height: "2rem", fontSize: "18px" }}
                    onClick={() => {
                        playSelected(item);
                        console.log("itemsss", a)
                    }}>
                    <FaPlay />
                </button>
            </div>
            <hr />
        </div>
    )
}

export default ListItem;
