import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Registration = () => {

   const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log("register user", user);
            form.reset();
        })
        .catch(error =>{
            console.log(error);
        })

       
    }


    return (
        <div className='mt-10 w-96 mx-auto'>
        <form onSubmit={handleSubmit}>
            <label className="input-group input-group-vertical mb-4">
                <span>Name</span>
                <input type="text" placeholder="Name" className="input input-bordered" />

            </label>

            <label className="input-group input-group-vertical">
                <span>Email</span>
                <input type="text" placeholder="write email" className="input input-bordered" />

            </label>

            <label className="input-group input-group-vertical">
                <span className='mt-4'>Password</span>
                <input type="password" placeholder="write password" className="input input-bordered" />

            </label>
             <button className="btn btn-outline mt-5">Registration</button>
        </form>
    </div>
    );
};

export default Registration;