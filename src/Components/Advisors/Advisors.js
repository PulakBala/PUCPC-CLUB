import React from 'react';

const Advisors = ({advisor}) => {
    return (
        <div >
             <img className='rounded-full h-24 w-24 inline' src={advisor.picture} alt="" />
            <h2>Title : {advisor.title}</h2>
           
        </div>
    );
};

export default Advisors;