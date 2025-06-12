import React, { useContext, useEffect, useState } from 'react'
import Welcome from './Welcome';
import ViewEnquiries from './ViewEnquiries';
import { loginStatus } from '../../App';
import Login from './Login';
import { useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [view, setView] = useState("");
    const [token, setToken] = useContext(loginStatus)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://carrental-server-1u26.onrender.com/dashboard", {
            headers: {
                "x-token": token
            }
        })
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.log(err);

            })
    })

    const dashboardView = useMemo(() => {
        if (view === "") {
            return <Welcome />
        }
        else if (view === "viewEnquiry") {
            return <ViewEnquiries />
        }
        else {
            return <h1>Invalid View</h1>
        }
    }, [view])
    if (token === "") {
        navigate("/admin")
    }
    else {


        return (
            <div className=' container-fluid'>
                <div className="row align-items-center">
                    <aside className="col-lg-3">
                        <h3 onClick={() => setView("")}>Welcome {user.name}</h3>
                        <button onClick={() => setView("addCar")}>Add Car</button>
                        <button onClick={() => setView("viewCar")}>View Car</button>
                        <button onClick={() => setView("addService")}>Add Service</button>
                        <button onClick={() => setView("viewService")}>View Service</button>
                        <button onClick={() => setView("viewEnquiry")}>View Enquiries</button>
                        <button onClick={() => setToken("")}>Logout</button>
                    </aside>
                    <div className="col-lg-9">
                        {dashboardView}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard