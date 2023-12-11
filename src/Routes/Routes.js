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
import ServiceDetails from "../pages/Home/Services/ServiceDetails";
import Posts from "../pages/Posts/Posts/Posts";
import Payment from "../pages/Dashobard/Payment/Payment";
import AllBookings from "../pages/Dashobard/AllBookings/AllBookings";

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
                path: "/post",
                element: <Posts />
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
                path: "/blogs/:id",
                element: <PrivateRoutes><BlogDetails/></PrivateRoutes>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/blogs/${params.id}`)
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
                element: <AllUsers/>
            },
            {
                path: '/dashboard/allBookings',
                element: <AllBookings/>
            },
            {
                path: '/dashboard/adddoctors',
                element: <AddDoctor/>
            },
            {
                path: '/dashboard/managedoctors',
                element: <ManageDoctor/>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])