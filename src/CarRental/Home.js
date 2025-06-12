import React from 'react'
import mainBanner from "./assets/travel-vacations-design-vector-illustration-eps10-graphic_24908-16750.jpg"
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <section className=' container p-5'>
            <div className='row'>
                <div className='col-lg-6 p-5'>
                    <h1 className=' display-4'>Your Trusted Partner for Safe & Comfortable Travel</h1>
                    <p>Explore the world with Naveen Car Travels—Where journeys become memorable experiences</p>
                   <NavLink to={`/about`}> <button className=' btn btn-primary me-3'> Know More</button></NavLink>
                    <button className='btn btn-danger'>Book Now</button>
                </div>
                <div className='col-lg-6 p-5 text-end'>
                    <img src={mainBanner} className='w-75 mainBanner' />
                </div>
            </div>
        </section>
    )
}

export default Home