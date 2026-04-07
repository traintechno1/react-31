import { useState } from "react"

export default function Field(){
    const [pName, setPName] = useState("");

    function changeValue(e){
        let value = e.target.value;
        setPName(value);
    }

    return(
        <>
            <div>Name: </div>
            <h1>{pName}</h1>
            <input type="text" name="pName" value={pName} onChange={changeValue}/>
        </>
    )
}