
import { Outlet, Link} from "react-router-dom";
import "../about/About.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function About(){
    let isAllowed = true;
    const {counter, setCounter} = useContext(AuthContext);
    const incrementCount = () =>{
        setCounter(c => c + 1);
    }

    return(
        <>
            <h1>About Page</h1>
            <div>   
                <button onClick={incrementCount}>Increment</button>
                <p>Counter value is : {counter}</p>
            </div>
            <nav>
                <ul>
                    <li><Link to={"company"}>Company</Link></li>
                    <li><Link to={"product"}>Product</Link></li>
                </ul>
            </nav>
            <div className={isAllowed ? "allowed" : "not-allowed"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia numquam, hic blanditiis libero minus laudantium! Aut quos error odit itaque amet modi, molestias eaque reiciendis nam distinctio quae ipsum dolorem nisi commodi quaerat accusantium consequuntur cumque doloribus molestiae quibusdam voluptatum magni quis. Reprehenderit dolores ullam vero, labore expedita blanditiis animi ad cupiditate libero illum impedit sapiente autem molestias dolorum, neque temporibus iste velit totam. Voluptate asperiores expedita saepe! Corrupti minus dolorum vel ea magnam inventore sit nostrum enim ullam sapiente explicabo officiis deleniti libero excepturi magni iusto, dolor earum vero ab quis sed placeat. Exercitationem maiores cumque nam officia.
            </div>

            <Outlet></Outlet>
        </>
    )
}