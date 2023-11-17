import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Meditation from "../pages/Meditation/Meditation";
import Appointment from "../pages/Appointment/Appointment";
import PrivateRoutes from "./PrivateRoutes";
import BlogDetails from "../pages/Blog/BlogDetails/BlogDetails";
import Blog from "../pages/Blog/Blog/Blog";
import DashoardLayout from "../layout/DashoardLayout/DashoardLayout";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import MyAppointment from "../pages/Dashobard/MyAppointment/MyAppointment";
import AllUsers from "../pages/Dashobard/AllUsers/AllUsers";
import AddDoctor from "../pages/Dashobard/AddDoctor/AddDoctor";
import ManageDoctor from "../pages/Dashobard/ManageDoctor/ManageDoctor";

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
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog/:id",
                element: <PrivateRoutes><BlogDetails/></PrivateRoutes>,
                loader: ({params}) =>{
                    return fetch(`https://phychobuzz-server.vercel.app/blogs/${params.id}`)
                }
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashoardLayout></DashoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment/>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers/></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctors',
                element: <AdminRoutes><AddDoctor/></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctor/></AdminRoutes>
            },
        ]
    }
])