import React,  { useEffect, useState }  from 'react'
import Stream from '../component/Stream'
import Train from '../component/Train'
import Test from '../component/Test'
import io, { Socket } from 'socket.io-client';




// Class
const Streaming = (props)=> {

const [click, setClick] = useState("")
const [stream, setStream] = useState(false)
const [buttonText, setButtonText] = useState("Start datastream")

const [component, setComponent] = useState(<Stream/>)

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

    function handleStream() {
        setComponent(<Stream/>)
    }

    function handleTrain() {
        setComponent(<Train/>)
    }

    function handleTest() {
        setComponent(<Test/>)
    } 


    return (
        <>
        <h1>Streaming</h1>
        <button onClick={handleClick}>{buttonText}</button>
        <button onClick={handleStream}>Stream</button>
        <button onClick={handleTrain}>Train</button>
        <button onClick={handleTest}>Test</button>
        {component}
        {/* <Stream/> */}
        {/* <Train/>
        <Test/> */}
        { (stream ? <p> Data stream in progress...</p> : <p> Data stream stopped</p>)}
        <p>{click}</p>
        </>
    )

}
export default Streaming