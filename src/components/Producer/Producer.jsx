import { useDispatch, useSelector } from "react-redux"
import { setDescription } from "../../context/store/descriptionSlice";

export function Producer(){
    const description = useSelector((state)=> state.description.d);

    const dispatch = useDispatch();

    function descriptionChange(event){
        dispatch(setDescription(event.target.value))
    }
    return(
        <>
            <div>
                <label>Description:</label>
            <input type="text" 
                name="description" 
                value={description}
                placeholder="Enter Description"
                onChange={descriptionChange} />
            </div>
        </>
    )
}