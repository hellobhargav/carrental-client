import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Cars = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://carrental-server-1u26.onrender.com/cars`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    })
    return (
        <div className=' container p-5'>
            <h1 className='text-center mb-5'> {data.length} + Car </h1>
            <div className='row'>
                {
                    data.map((car, index) => {
                        return (
                            <div key={index} className='col-md-4 mb-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{car.name}</h5>
                                        {/* <p className='card-text'>{car.description}</p>
                                        <p className='card-text'>Model: {car.model}</p>
                                        <p className='card-text'>Category: {car.category}</p> */}
                                        <p className='card-text'>Price per day: {car.price_per_day}</p>
                                        <NavLink to={`/carDetails/${car.id}`}>
                                            <button className=' btn btn-primary'>Know More</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cars