import React, { useMemo, useState } from 'react'

const MemoEx = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(5)
    const result = useMemo(() => {
        return Mul(number)
    }, [number])
    return (
        <div className=' container p-5'>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <h2>Result : {result}</h2>
            <button onClick={() => setNumber(number + 1)}>Add</button>
        </div>
    )
}

const Mul = (num) => {
    console.log('Mul function called')
    return num * num
}

export default MemoEx