import React,  { useEffect, useState }  from 'react'
import io, { Socket } from 'socket.io-client';




// Class
const Streaming = (props)=> {

const [click, setClick] = useState("")
const [stream, setStream] = useState(false)
const [buttonText, setButtonText] = useState("Start datastream")

function handleClick() {
 if(stream == false){
   setStream(true);
    setButtonText("Stop datastream")
 }
 else { //stream == true
    setStream(false);
    setButtonText("start datastream")
 }
}



    return (
        <>
        <h1>Streaming</h1>
        <button onClick={handleClick}>{buttonText}</button>
        { (stream ? <p> Data stream in progress...</p> : <p> Data stream stopped</p>)}
        <p>{click}</p>
        </>
    )

}
export default Streaming