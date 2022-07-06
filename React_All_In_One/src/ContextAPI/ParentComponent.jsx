import React, { createContext } from 'react'
import ChildAComponent from './ChildAComponent'

const FirstName = createContext();
const fName = "Zahid"
const LastName = createContext();
const lName = "Chand"
const ParentComponent = () => {
    return (
        <>
            <FirstName.Provider value={fName}>
                <LastName.Provider value={lName}>
                    <ChildAComponent />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )


}
export default ParentComponent;
export { FirstName  , LastName}