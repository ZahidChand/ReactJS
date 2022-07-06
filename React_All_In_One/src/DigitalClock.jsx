import React from "react";
import { useState } from "react";

const DigitalClock = () => {

    let time = new Date().toLocaleTimeString()
    const [cTime, setCTime] = useState(time)

    const updateTime = () => {
        return setCTime(new Date().toLocaleTimeString())
    }

    setInterval(updateTime, 1000)

    return (
        <div style={{ padding: "15%", textAlign: "center" }}>
            <h1 style={{ fontSize: "90px" }}>{cTime}</h1>
        </div>
    )

}
export default DigitalClock;
