import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../context/store/counterSlice";

export default function GlobalCounter(){
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return(<>
        <h2>Global Counter Example:</h2>
        <button onClick={()=> dispatch(increment())}>+</button>
            {count}
        <button onClick={()=> dispatch(decrement())}>-</button>
    </>)
}