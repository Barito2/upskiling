import React, { useState } from 'react'
import CounterComponent from './CounterComponent'

const CounterCountiner = () => {
    
    const [count, setCount] = useState(0)

    return (
        <>
            <CounterComponent count={count} />
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default CounterCountiner
