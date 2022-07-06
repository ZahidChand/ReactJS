import React from "react";

function Greets(props) {
    // console.log(props);
    return (
        <>
            <h1> Hello {props.name}</h1>
            {props.children}
        </>
        //To access child tag which is inside we need to pass props.children
    )
}

export default Greets;

/** Pass the parameter as props 
 * In that props will we get object and from that we can retrive values.
 */