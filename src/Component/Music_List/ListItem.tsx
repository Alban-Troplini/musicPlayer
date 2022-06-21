import React from 'react';

import './ListItem.css';
import martin from '../../image/vinyl.png';
import { FaPlay } from 'react-icons/fa';

const ListItem = ({radioImg, radioName}: any) => {
    return (
        <div>
            <div className='item animate__animated animate__bounce'>
            <img src={radioImg} alt="Song Image" className='image'/>
            <div className='description'>
                <h4>{radioName}</h4>
                <p>description </p>
                
            </div>
            <button 
                    style={{ width: "2rem", height: "2rem", fontSize: "18px" }}>
                    <FaPlay /> 
                </button>      
        </div>
        <hr/>
        </div>
    )
}

export default ListItem;
