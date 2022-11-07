import React from 'react';
import Footer from '../Footer/Footer';


const Search = () => {
    return (
       <div className=''>
         <div className='mt-36'>
            <input className='border-4 border-sky-500 p-2 w-7/12'  type="text" placeholder='Search' />
        </div>
           <div className='bg-gray-600 absolute inset-x-0 bottom-0 w-full'>
              <Footer ></Footer>
           </div>
        </div>
        
       
    );
};

export default Search;