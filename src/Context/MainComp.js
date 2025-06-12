import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'

export const userData = createContext()

const MainComp = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <userData.Provider value={[count, setCount]}>
                <h2>MainComp</h2>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>Add</button>
                <Comp1 />
            </userData.Provider>

        </div>
    )
}

export default MainComp