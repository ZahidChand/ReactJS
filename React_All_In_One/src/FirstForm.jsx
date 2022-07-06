import React from "react";
import { useState } from "react";

const FirstForm = () => {
    //In this useState is initial data i.e initial value
    // uname or myFullName is current data
    // And setUName or setMyFullName is function which holds updated data.

    const [uname, setUName] = useState("");
    const [myFullName, setMyFullName] = useState("")

    //When we type anything in out input feild then valueChanged Is called
    //And from event.target.value we can get what has been typed in input feild
    const valueChanged = (event) => {
        let userName = event.target.value;
        setUName(userName)

    }


    const displayName = (event) => {
        event.preventDefault();
        setMyFullName(uname)
    }


    /**
     * When we use form its nature is it reload the page when we click on 
     * submit and reactjs is single page application and we dont need reload
     * so to handle that we need to add 
     *         event.preventDefault();
        method when we click on submit so it will not reload that application.
        
     */
    return (
        <>
            <form onSubmit={displayName}>
                <div style={{ textAlign: "center", padding: "15.5%", backgroundColor: "skyblue" }}>

                    <h1 style={{ fontFamily: "serif", fontSize: "50px" }}>
                        Hello {myFullName}
                    </h1>
                    <input type="text" placeholder="Enter Your Name"
                        onChange={valueChanged} value={uname}
                        style={{ fontSize: "30px", fontFamily: "serif" }} />
                    <br />
                    <button type="submit" style={{
                        fontSize: "30px", marginTop: "19px",
                        backgroundColor: "lightgreen", cursor: "pointer", fontFamily: "serif"
                    }}>
                        Click Me
                    </button>
                </div>
            </form>
        </>
    )
}
export default FirstForm;