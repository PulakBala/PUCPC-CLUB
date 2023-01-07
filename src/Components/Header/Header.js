import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
       <nav className='bg-gray-500 w-full h-16 sticky top-0'>
         <div onClick={() => setOpen(!open)} className='h-12 w-12 md:hidden mr-auto'>
            {
                open? <XMarkIcon/> : <Bars3Icon/>
            }
            
         </div>
         <div className={`bg-gray-500 p-6 gap-4 w-full md:flex justify-center  absolute md:static duration-500 ${open? 'top-12' : 'top-[-290px]'}`}>
               <div className='header flex md:flex-row flex-col'>
                <Link to='/'>Home</Link>
                <Link to='/Search'>Search</Link>
                <Link to='/events'>Events</Link>
                <Link to='/forum'>Forum</Link>
                <Link to='/verify'>Verify Certificate</Link>
                <Link to='/settings'>Settings</Link>
                <Link to='/login'>Login</Link>
                <Link to='/registration'>Registration</Link>
               </div>
         </div>
       </nav>
    );
};

export default Header;