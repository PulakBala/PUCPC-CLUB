import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleSubmitLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log("login user details", user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className='mt-10 w-96 mx-auto'>
            <form onSubmit={handleSubmitLogin}>
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="text" placeholder="write email" name='email' className="input input-bordered" />

                </label>

                <label className="input-group input-group-vertical">
                    <span className='mt-4'>Password</span>
                    <input type="password" placeholder="write password" name='password' className="input input-bordered" />

                </label>
                 <button className="btn btn-outline mt-5">Login</button>
            </form>
        </div>
    );
};

export default Login;