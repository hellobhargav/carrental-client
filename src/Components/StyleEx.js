import React from 'react'
import "./style.css"

const StyleEx = () => {
    const mystyles = {
        backgroundColor: "green",
        color: "white",
        padding: 50
    }
    return (
        <div>
            <h1 style={{ color: "white", backgroundColor: "red" }}>StyleEx</h1>
            <h1 style={mystyles}>StyleEx</h1>
            <h1 className='danger'>StyleEx</h1>
        </div>
    )
}

export default StyleEx