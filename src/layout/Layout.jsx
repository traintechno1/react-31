import {NavLink, Outlet, useNavigate} from "react-router-dom";
import "../layout/Layout.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Layout(){

    const navigate = useNavigate();
    const {token, setToken} = useContext(AuthContext);

    const logoutUser = () => {
        setToken(null);
        navigate("/login");
    }

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

                        {
                            token ? 
                                <ul>
                                    <li onClick={logoutUser}><a>Logout</a></li>
                                </ul>
                                :
                                <ul>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                    <li><NavLink to="/register">Register</NavLink></li>
                                </ul>
                        }

                    </div>
                </div>
            </nav>

            <Outlet></Outlet>
        </>
    )
}