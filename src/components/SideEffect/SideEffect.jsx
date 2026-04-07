import { useEffect, useState } from "react"


export default function SideEffect(){
    let [count , setCount] = useState(0);
    const [pName, setPName] = useState("");

    // useEffect(()=>{
    //     console.log("Use Effect is called");
    // }) //this useEffect will only call on every component render
    
    useEffect(()=>{
        console.log("Use Effect with empty parameter is called");
    },[]) //this useEffect will only call on component first load

    useEffect(()=>{
        console.log("Count value is changed");
    }, [count]);

    useEffect(()=>{
        console.log("Input field is changed");
    }, [pName]);

    function changeValue(e){
        let value = e.target.value;
        setPName(value);
    }

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
            <h1>Use Effect Example:</h1>
            <button onClick={increment}>+</button>
            <span className="h3">{count}</span>
            <button onClick={decrement}>-</button>
            <input type="text" name="pName" value={pName} onChange={changeValue}/>
        </>
    )
}