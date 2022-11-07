import React from 'react';

const Footer = () => {
    return (
        <div className='footer grid grid-cols-3'>
            <h1 className='mt-24 text-2xl mr-8 text-cyan-50'>Computer Programming Club</h1>
            <div className="footer-container">
                <h1 className='mt-6 text-2xl'>About  <span className='text-rose-50 font-bold'>PUCPC</span></h1>
                <h2 className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione aliquid debitis quidem asperiores ullam ad quaerat tenetur architecto natus praesentium.</h2>
            </div>
            <div className="footer-social-media">
                <h1 className='mt-6 text-2xl text-teal-50'>Find Us On</h1>
                
            </div>
        </div>
    );
};

export default Footer;