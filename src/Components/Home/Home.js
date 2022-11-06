import React from 'react';
import { useLoaderData } from 'react-router-dom';
import images from '../../Images/WhatsApp Image 2022-10-25 at 3.36.49 AM.jpeg'
import Advisors from '../Advisors/Advisors';
import CpcWings from '../CpcWings/CpcWings';
const Home = () => {
    const advisors = useLoaderData();
    const cpc = [
        {
            head: 'ACM Task Force', 
            para: 'Where programmers become Gladiators. We organize workshop, classes, contests and many more.'
        },
        {
            head: ' Development', 
            para: 'The best way to get a project done faster is to start sooner Start development today.'
        },{
            head: 'Research & Journal', 
            para: 'Why do we do basic research? To learn about ourselves. Start learning yourself today.'
        },{
            head: 'Jobs, Career & Industry Collaboration', 
            para: 'Worried about your career Lets learn how to build a better and skilled career.'
        }
    ]
    return (
        <section>
            
            <div>
               <img className='w-full' src={images} alt="" />
            </div>
            <p className='text-3xl font-bold mt-10'>PUCPC WINGS</p>
            <div className='grid md:grid-cols-2 gap-10 m-10'>
               {
                cpc.map((cp,idx)=> <CpcWings key={idx} cp={cp}></CpcWings>)
               }
            </div>
            
            <div className='grid grid-cols-1'>
                {
                    advisors.slice(0,1).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              <div className='flex justify-center mt-12'>
              {
                    advisors.slice(0,2).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
              <div className='flex justify-center mt-12'>
              {
                    advisors.slice(0,1).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
            </div>
        </section>
    );
};

export default Home;