import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className=' container-fluid px-5'>
            <nav
                className="navbar navbar-expand-sm"
            >
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <h5>Naveen <span className='text-danger'>Car Travels</span></h5>
                    </NavLink>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/" aria-current="page">Home
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cars">Cars</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header