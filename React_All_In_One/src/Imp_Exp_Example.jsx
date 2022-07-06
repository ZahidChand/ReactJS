import React from "react";

const fighter1 = "Nate";

const fighter2 = "Amanda";



function fighter3() {
    return (<p>Usman</p>);
}

function fighter4() {
    return (<p>Gilbert</p>);
}

export default fighter3;

export { fighter1 , fighter2 ,fighter4}

/** NOTE --> We have only 1 default value , We can only set 1 value as 
 * default . If it has more then one export then we need to write that in {}
 * 
 */