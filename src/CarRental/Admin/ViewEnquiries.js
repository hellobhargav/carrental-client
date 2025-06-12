import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
    const [enquiries, setEnq] = useState([])

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [_id, setId] = useState("")

    useEffect(() => {
        axios.get(`https://carrental-server-1u26.onrender.com/enquiries`)
            .then((res) => setEnq(res.data))
            .catch((err) => console.log(err))
    })


    const deleteEnq = (enqId) => {
        axios.delete(`https://carrental-server-1u26.onrender.com/enquiries/${enqId}`)
            .then(() => alert("Enq Deleted"))
            .catch((err) => console.log(err))
    }
    const getOneRecord = (enqId) => {
        axios.get(`https://carrental-server-1u26.onrender.com/enquiries/${enqId}`)
            .then((res) => {
                setName(res.data.name)
                setMobile(res.data.mobile)
                setEmail(res.data.email)
                setId(res.data._id)
            })
            .catch((err) => console.log(err))
    }
    const updateEnq = (e) => {
        e.preventDefault();
        axios.put(`https://carrental-server-1u26.onrender.com/enquiries/${_id}`, { _id, name, mobile, email })
            .then((res) => alert("Enq Updated "))
            .catch((err) => console.log(err))
    }
    return (
        <div className=' container p-5'>
            <h2>View Enquiries</h2>
            <table className=' table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enquiries.map((enq, index) => {
                            return (
                                <tr key={index}>
                                    <td>{enq.name}</td>
                                    <td>{enq.mobile}</td>
                                    <td>{enq.email}</td>
                                    <td>
                                        <button onClick={() => getOneRecord(enq._id)} data-bs-target="#update" data-bs-toggle="modal" className=' btn btn-primary me-3'>Edit</button>
                                        <button onClick={() => deleteEnq(enq._id)} className=' btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='modal fade' id='update'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5>Update Enquiries</h5>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={updateEnq}>
                                <input name='name' placeholder='Enter Name' value={name} className=' form-control mb-3' onChange={(e) => setName(e.target.value)} />
                                <input name='mobile' placeholder='Mobile Number' value={mobile} className=' form-control mb-3' onChange={(e) => setMobile(e.target.value)} />
                                <input name='email' placeholder='Email Address' value={email} className=' form-control mb-3' onChange={(e) => setEmail(e.target.value)} />
                                <input type='submit' className=' form-control mb-3' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewEnquiries