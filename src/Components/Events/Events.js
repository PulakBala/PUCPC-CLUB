import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventDispaly from '../EventDisplay/EventDisplay';

const Events = () => {
   const events = useLoaderData();
    return (
        <div className=''>
            
          {
            events.map(event => <EventDispaly
                key={event.id}
                event={event}
            ></EventDispaly>)
          }
        </div>
    );
};

export default Events;