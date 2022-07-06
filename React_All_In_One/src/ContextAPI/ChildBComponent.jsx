import React from 'react'
import { useContext } from 'react';
import ChildCComponent from './ChildCComponent';
import { FirstName, LastName } from "./ParentComponent"

const ChildBComponent = () => {
    const fName = useContext(FirstName);
    const lName = useContext(LastName);
    return (

        <h1>
            Say My Name {fName}
        </h1>
    )

}
export default ChildBComponent;