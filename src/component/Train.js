import React from 'react'

// class 
const Train = (props) => { 

    return (
        <>
        <h1>Data stream was: {props.data} </h1> 
        <h1> my name is : {props.name}</h1>
        {props.component}
        </>
    )

}
export default Train 