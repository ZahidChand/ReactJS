import React from "react";
import { useState } from "react";

const LoginForm = () => {

    const [uname, setUName] = useState("");
    const [password, setPassword] = useState("");
    const [myFullName, setMyFullName] = useState("")

    const userNameChanged = (event) => {
        setUName(event.target.value)
    }

    const passwordChanged = (event) => {
        setPassword(event.target.value)
    }

    const displayDetails = (event) => {
        event.preventDefault();
        // setMyFullName(uname + " " + password)
        setMyFullName(`User Name Is ${uname} And Password Is ${password}`)
    }

    return (
        <>
            <form onSubmit={displayDetails}>
                <div style={{ textAlign: "center", padding: "15.5%", backgroundColor: "skyblue" }}>

                    <h1 style={{ fontFamily: "serif", fontSize: "50px" }}>
                        Hello {myFullName}
                    </h1>
                    <input type="text" placeholder="Enter Your Name"
                        onChange={userNameChanged} value={uname}
                        style={{ fontSize: "30px", fontFamily: "serif" }} />
                    <br />
                    <br />

                    <input type="password" placeholder="Enter Password"
                        onChange={passwordChanged} value={password}
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
export default LoginForm 