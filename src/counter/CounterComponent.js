import React from 'react'

const CounterComponent = (props) => {

    const { count } = props
    
    return (
        <>
            <h1>{count}</h1>
        </>
    )
}

export default CounterComponent
