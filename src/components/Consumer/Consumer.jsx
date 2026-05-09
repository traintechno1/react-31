import { useSelector } from "react-redux";

export function Consumer(){
    
    const description = useSelector((state)=> state.description.d);

    return(
        <>
            <h2>
                The Description is: {description}
            </h2>
        </>
    )
}