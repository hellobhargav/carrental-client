import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiry from './SendEnquiry'
import axios from 'axios';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState({})
    useEffect(() => {
        axios.get(`https://carrental-server-1u26.onrender.com/cars/${id}`)
            .then((res) => setCar(res.data))
    })
    return (
        <div className=' container p-5'>
            <div className='row'>
                <div className='col-lg-8'>
                    <h2>{car.name}</h2>
                    <p>{car.description}</p>
                    <p className='btn btn-danger me-3'>Best In : {car.category}</p>
                    <p className='btn btn-success me-3'>{car.model}</p>
                    <p className='btn btn-primary '>{car.price_per_day}/- Only Per Day</p>
                </div>
                <div className='col-lg-4'>
                    <SendEnquiry />
                </div>
            </div>
        </div>
    )
}

export default CarDetails