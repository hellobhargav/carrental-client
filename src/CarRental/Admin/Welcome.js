import React from 'react'
import useCallApi from './CallApi'

const Welcome = () => {
    const cars = useCallApi(`http://localhost:4000/cars`)
    const services = useCallApi(`http://localhost:4000/services`)
    const enquiries = useCallApi(`http://localhost:5000/enquiries`)
    return (
        <div className=' container '>
            <h1>Welcome to Admin Dashboard</h1>
            <div className=' row'>
                <div className=' col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{cars.length}+</h5>
                            <h5 className='card-title'>Cars</h5>
                        </div>
                    </div>
                </div>
                <div className=' col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{enquiries.length}+</h5>
                            <h5 className='card-title'>Enquiries</h5>
                        </div>
                    </div>
                </div>
                <div className=' col-lg-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{services.length}+</h5>
                            <h5 className='card-title'>Services</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome