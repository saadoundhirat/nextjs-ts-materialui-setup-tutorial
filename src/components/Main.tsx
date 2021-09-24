import React from 'react'

export default function Main(props: { count: number}) {
    return (
        <>
            <p>Hello World for the main component{props.count}</p>   
        </>
    )
}
