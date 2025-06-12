import React, { useContext } from 'react'
import { userData } from './MainComp'

const Comp3 = () => {
    const [count, setCount] = useContext(userData)
    return (
        <div>
            <h2>Comp3</h2>
            <h3>Counter : {count}</h3>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}

export default Comp3