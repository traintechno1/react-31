import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import AboutCompany from "../pages/about/about-company/AboutCompany";
import NotFound from "../pages/not-found/NotFound";
import Register from "../pages/register/register";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>,
                children: [
                    {
                        path: "company",
                        element: <h1>About Company</h1>
                    },
                    {
                        path: "company/:companyId",
                        element: <AboutCompany />
                    },
                    {
                        path: "product",
                        element: <h1>About Our Products</h1>
                    }
                ]
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]
)