import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Meditation from "../pages/Meditation/Meditation";
import Appointment from "../pages/Appointment/Appointment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/meditation',
                element: <Meditation/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            }
        ]
    }
])