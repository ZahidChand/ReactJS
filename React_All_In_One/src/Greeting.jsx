import React from "react";
// import './index.css'

function Greeting() {

    let greeting = '';
    let curDate = new Date()
    let curHour = curDate.getHours()
    const cssStyle = {};

    if (curHour >= 1 && curHour < 12) {
        greeting = "Good Morning";
        cssStyle.color = "green";
    }
    else if (curHour >= 12 && curHour < 20) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange";
    }
    else {
        greeting = "Good Night"
        cssStyle.color = "black";
    }

    return (
        <>
            <div>
                <h1>Hey.. <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>

    );
}
export default Greeting;