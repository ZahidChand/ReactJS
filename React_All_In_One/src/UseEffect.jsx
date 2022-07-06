import React, { useEffect } from 'react'
import { useState } from 'react';

// -------------------------EG 1----------------------

// const UseEffect = () => {
//     const [num, setNum] = useState(0)

//     useEffect(() => {
//         document.title = `You Clicked Me ${num}`
//     })

//     return (
//         <button onClick={() => { setNum(num + 1) }} style={{
//             fontSize: "40px",
//             margin: "30px"
//         }} >
//             Click Me {num}
//         </button>
//     )
// }

// -------------------------EG 2----------------------
// const UseEffect = (() => {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         setTimeout(() => {
//             setCount(count + 1)
//             document.title = `I Have Rendered ${count + 1} Times`
//         }, 1000);
//     })


//     return (
//         <h1>I Have Rendered {count} Times</h1>
//     )

// })


export default UseEffect;

/**
 * So useEffect is when we want to perform any action and after that action 
 * we want to perform any other task 
 * like in this case we want to click and simultaniously we want to change title 
 * again and again when we clicked.
 * we need to use useEffect
 * 
 * When page is reloaded useeffect is called first.
 */