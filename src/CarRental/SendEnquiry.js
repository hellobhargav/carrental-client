import axios from 'axios'
import React, { useState } from 'react'

const SendEnquiry = () => {
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post(`https://carrental-server-1u26.onrender.com/enquiries`, { name, mobile, email })
            .then((res) => alert("Your Enquiry Sent"))
            .catch((err) => console.log(err))

    }

    return (
        <div>
            <h3>SendEnquiry</h3>
            <form onSubmit={submitHandler}>
                <input name='name' placeholder='Enter Name' className=' form-control mb-3' onChange={(e) => setName(e.target.value)} />
                <input name='mobile' placeholder='Mobile Number' className=' form-control mb-3' onChange={(e) => setMobile(e.target.value)} />
                <input name='email' placeholder='Email Address' className=' form-control mb-3' onChange={(e) => setEmail(e.target.value)} />
                <input type='submit' className=' form-control mb-3' />
            </form>
        </div>
    )
}

export default SendEnquiry