import {NavLink, Outlet} from "react-router-dom";
import "../layout/Layout.css";

export default function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>
            </nav>

            <Outlet></Outlet>
        </>
    )
}