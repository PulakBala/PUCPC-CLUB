import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventDispaly from '../EventDisplay/EventDisplay';
import Footer from '../Footer/Footer';

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
          <div className='bg-gray-600'>
            <Footer></Footer>
          </div>
        </div>
    );
};

export default Events;