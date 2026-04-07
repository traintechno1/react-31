import { useEffect, useState } from "react";

export default function ApiCall(){    
    const [todo, setTodo] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data=> {
            setTodo(data)
        })
    }, [])


    return(
        <>
            <h1>Get API call</h1>
            {
                todo?.map(td=>{
                    return(
                        <div key={td.id}>
                            <p>Todo Id: {td.id}</p>
                            <p>User Id: {td.userId}</p>
                            <p>Title: {td.title}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}