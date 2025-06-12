import React, { useEffect, useState } from 'react'

const StateEx = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })
    return (
        <div className=' container p-5'>
            <h1>Counter : {count} </h1>
            <button className='btn btn-primary me-3' onClick={() => setCount(count + 1)}>Increment</button>
            <button className=' btn btn-danger' onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default StateEx