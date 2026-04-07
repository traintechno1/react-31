import { useState } from "react";

export default function Counter(){
    // let count = 0;
    // there are special variables if they are changed the UI is reprinted
    // and those variables are called as State Variables.
    let [count , setCount] = useState(0);
    function increment(){
        setCount(count=> count+1);
        // count++; 
    }
    function decrement(){
        setCount(count=> count-1);
        // count--;
        // console.log(count);
    }
    return(
        <>
            {
            console.log("Count Changed")
            }
            <h1>Counter</h1>
            <button onClick={increment}>+</button>
            <span className="h3">{count}</span>
            <button onClick={decrement}>-</button>
        </>
    )
}