import React from "react";
import { useState } from "react";

const HandleComplexForm = () => {

    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: "",
        mobile: ""

    });

    const inputChanged = (event) => {
        console.log(event.target.value);

        const value = event.target.value;   // It will return whatever value is been entered 
        // in that perticular feild

        const name = event.target.name;     // It will return name of feild like fName, lName,email


        setFullName((previousValue) => {
            console.log(previousValue);
            /**    1st Way To Write   using spread operator      */

            return {
                ...previousValue,
                [name]: value

                //***IMP
                //So here we are writing [name] in square bracket because
                // it thinks that the next value is to be added below that array it will consider that 
                // as new value. So to solve that we add [name] so that it will not think that as a new value.

                // EG -->
                // const fullName = {
                // fname :"Zahid"
                // lname :"Chand"

                // const myBioData = {
                // id : 101,
                // ...fullName,     --> Spread Operator
                // age : 25,        --> Adds new property age
                // gender : "Male"
            }
        })


        /**    2nd Way To Write    using if .. else statement   */

        // if (name === "fName") {
        //     return {
        //         fName: value,
        //         lName: previousValue.lName,
        //         email: previousValue.email,
        //         mobile: previousValue.mobile


        //     }
        // } else if (name === "lName") {
        //     return {
        //         fName: previousValue.fName,
        //         lName: value,
        //         email: previousValue.email,
        //         mobile: previousValue.mobile


        //     }
        // }
        // else if (name === "email") {
        //     return {
        //         fName: previousValue.fName,
        //         lName: previousValue.lName,
        //         email: value,
        //         mobile: previousValue.mobile


        //     }
        // }
        // else if (name === "mobile") {
        //     return {
        //         fName: previousValue.fName,
        //         lName: previousValue.lName,
        //         email: previousValue.email,
        //         mobile: value
        //     }
        // }

    }

    const displayDetails = (event) => {
        event.preventDefault()
        alert("Submitted")

    }
    return (
        <>
            <form onSubmit={displayDetails}>
                <div style={{ textAlign: "center", padding: "15.5%", backgroundColor: "skyblue" }}>

                    <h1 style={{ fontFamily: "serif", fontSize: "50px" }}>
                        Hello {fullName.fName} {fullName.lName} {fullName.email} {fullName.mobile}
                    </h1>
                    <input type="text" placeholder="Enter First Name" name="fName"
                        onChange={inputChanged} value={fullName.fName}
                        style={{ fontSize: "30px", fontFamily: "serif" }} />
                    <br />
                    <br />

                    <input type="text" placeholder="Enter Last Name" name="lName"
                        onChange={inputChanged} value={fullName.lName}
                        style={{ fontSize: "30px", fontFamily: "serif" }} />
                    <br />
                    <br />

                    <input type="text" placeholder="Enter Your Email" name="email"
                        onChange={inputChanged} value={fullName.email}
                        style={{ fontSize: "30px", fontFamily: "serif" }} />
                    <br />
                    <br />

                    <input type="number" placeholder="Enter Your Mobile Number" name="mobile"
                        onChange={inputChanged} value={fullName.mobile}
                        style={{ fontSize: "30px", fontFamily: "serif" }} />
                    <br />
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

export default HandleComplexForm;