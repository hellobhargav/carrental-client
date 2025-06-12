import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginStatus } from '../../App';
import axios from 'axios';

const Login = () => {
    const [details, setDetails] = useState({});
    const navigate = useNavigate()
    const [token, setToken] = useContext(loginStatus)

    const changeData = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details);

        axios.post(`https://carrental-server-1u26.onrender.com/login`, details)
            .then((res) => {
                console.log(res.data);
                setToken(res.data.token)
            })
            .catch((err) => console.log(err))
    }
    if (token) {
        navigate("/dashboard")
    }

    return (
        <div className=' container p-5'>
            <div className=' col-lg-6 shadow p-5 mx-auto'>
                <h3 className='text-center'>Admin Login</h3>
                <form onSubmit={submitHandler}>
                    <input type='text' name='email' onChange={changeData} placeholder='Email Address' className=' form-control mb-3' />
                    <input type='password' name='password' onChange={changeData} placeholder='Password' className=' form-control mb-3' />
                    <input type='submit' className=' form-control mb-3 btn btn-success' />
                </form>
            </div>
        </div>
    )
}

export default Login