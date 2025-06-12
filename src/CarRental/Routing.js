import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Cars from './Cars'
import Contact from './Contact'
import NoPage from './NoPage'
import Login from './Admin/Login'
import Dashboard from './Admin/Dashboard'
import CarDetails from './CarDetails'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/services' Component={Services} />
            <Route path='/cars' Component={Cars} />
            <Route path='/carDetails/:id' Component={CarDetails} />
            <Route path='/contact' Component={Contact} />
            <Route path='/admin' Component={Login} />
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='*' Component={NoPage} />
        </Routes>
    )
}

export default Routing