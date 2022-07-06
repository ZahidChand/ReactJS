import React from "react";

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    let result = a * b;
    result = result.toFixed(2)
    return result
}

function div(a, b) {
    let result = a / b;
    result = result.toFixed(2)
    return result

}

export default add;

export { sub, mul, div }