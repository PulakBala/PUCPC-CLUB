import React from 'react';
import './EventDisplay.css'
const EventDispaly = ({event}) => {
    const {picture, title, date, summery} = event;
    return (
        <div className='flex border-4 rounded-3xl mt-10 h-56 w-9/12'>
            <div>
                <img className='event h-full' src={picture} alt="" />
            </div>
            <div className=''>
                <h2>{title}</h2>
                <p><small>{date}</small></p>
                <p>{summery}</p>
            </div>
        </div>
    );
};

export default EventDispaly;