import {NavLink, Outlet} from "react-router-dom";
import "../layout/Layout.css";

export default function Layout(){
    return(
        <>
            <nav>
                <div className="navigation-bar">
                    <div className="left-nav">
                        <ul>
                            <li>
                                <NavLink to={"/"}>
                                    Home
                                </NavLink>
                            </li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/dashboard">Transaction</NavLink></li>
                        </ul>
                    </div>
                    <div className="right-nav">

                        <ul>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet></Outlet>
        </>
    )
}