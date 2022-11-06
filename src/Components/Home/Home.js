import React from 'react';
import { useLoaderData } from 'react-router-dom';
import images from '../../Images/WhatsApp Image 2022-10-25 at 3.36.49 AM.jpeg'
import Advisors from '../Advisors/Advisors';
import CpcWings from '../CpcWings/CpcWings';
import Footer from '../Footer/Footer';
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

               {/* meet the advisors */}

               <h4 className='text-3xl font-bold'>Meet The Advisors</h4>
               <p className='text-lg font-bold mt-4'>The advising teachers of PU Computer & Programming Club</p>
            <div className='grid grid-cols-1 mt-12'>
                {
                    advisors.slice(0,1).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              <div className='flex justify-around mt-12 ml-12 p-4'>
              {
                    advisors.slice(1,3).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
              <div className='flex justify-center mt-8'>
              {
                    advisors.slice(3,4).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>

              {/* Meet the Team */}

              <h4 className='text-3xl font-bold mt-12'>Meet The Team</h4>
              <p className='text-lg font-bold mt-4'>The core members of PU Computer & Programming Club</p>

              <div className='mt-12 '>
               {
                    advisors.slice(4,5).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
               
              </div>
              <div className='mt-12'>
               {
                    advisors.slice(5,6).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
              <div className='flex justify-around mt-12'>
               {
                    advisors.slice(6,10).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
              <div className='mt-12'>
               {
                    advisors.slice(10,11).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
              <div className='mt-12'>
               {
                    advisors.slice(11,12).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
              <div className='flex justify-around mt-12'>
               {
                    advisors.slice(12,16).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
              <div className='mt-12'>
               {
                    advisors.slice(16,17).map(advisor => <Advisors
                        key={advisor.id}
                        advisor={advisor}
                    ></Advisors>)
                }
              </div>
            </div>

            {/* Start Footer section */}
            <footer className='bg-gray-500 h-52'>
                <Footer></Footer>
            </footer>
           
        </section>
    );
};

export default Home;