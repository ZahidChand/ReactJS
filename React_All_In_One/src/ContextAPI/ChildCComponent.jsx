import React from 'react'
import { FirstName, LastName } from "./ParentComponent"
const ChildCComponent = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {

                              return  <h1>My First Name Is {fname} And My Last Name
                                    Is {lname} </h1>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>

        </>
    );
}
export default ChildCComponent;

// Consumer will only return a function it will not return Element tag
// Wherever we want to use that we need to add .consumer and return a function