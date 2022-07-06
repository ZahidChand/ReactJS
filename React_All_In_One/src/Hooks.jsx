import React from "react";
import { useState } from "react";


/**
 *   When we want to change state on any  action then in react we can achive 
 *   it by using UseState function.
 *      
 *  Here it follows simple concept of  array destructuring.
 *  It will take currentValue and function as an argument
 * 
 * 
 *     const [count, setCount] = useState(0)

        Here UseState has an argument of 0 value inside it.
        It will put that 0 in count and that called as current value.
        And setCount is method which will update the value.


           const IncrementNo = () => {
        setCount(count + 1)
        return count;
    }

    Once button is clicked then IncrementNo function is called then that has
    setCount() which is incrementing current value by +1 
    and last we are returning count and count gets updated 
 *  
 * 
 */
const Hooks = () => {

    const [count, setCount] = useState(0)

    const IncrementNo = () => {
        setCount(count + 1)
        return count;
    }

    const DecrementNo = () => {
        setCount(count - 1)
        return count;

    }
    return (
        <>
            <div style={{ textAlign: "center" }}>

                <h1> {count} </h1>
                <button style={{
                    width: "10%", height: "40px",
                    backgroundColor: "skyblue", fontSize: "16px",
                    color: "crimson", cursor: "pointer"
                }} onClick={IncrementNo} >
                    Increment</button>
                <br />
                <button style={{
                    margin: "10px",
                    width: "10%", height: "40px",
                    backgroundColor: "skyblue", fontSize: "16px",
                    color: "crimson", cursor: "pointer"
                }} onClick={DecrementNo} >
                    Decrement</button>
            </div>
        </>
    );
}

export default Hooks;