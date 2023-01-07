import React from 'react';

const Login = () => {
    return (
        <div className='mt-10 w-96 mx-auto'>
            <form>
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="text" placeholder="write email" className="input input-bordered" />

                </label>

                <label className="input-group input-group-vertical">
                    <span className='mt-4'>Password</span>
                    <input type="password" placeholder="write password" className="input input-bordered" />

                </label>
                 <button className="btn btn-outline mt-5">Login</button>
            </form>
        </div>
    );
};

export default Login;