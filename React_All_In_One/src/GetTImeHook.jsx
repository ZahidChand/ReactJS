import React from "react";
import { useState } from "react";

const GetTimeHook = () => {


    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    const ShowTime = () => {
        setCurrentTime(new Date().toLocaleTimeString())
        return setCurrentTime
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>

                <h1>{currentTime}</h1>
                <button style={{
                    margin: "10px",
                    width: "10%", height: "40px",
                    backgroundColor: "skyblue", fontSize: "16px",
                    color: "crimson", cursor: "pointer"
                }} onClick={ShowTime} >
                    Show Time</button>
            </div>
        </>

    )
}

export default GetTimeHook;