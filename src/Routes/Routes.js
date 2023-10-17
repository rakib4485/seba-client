import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetails/BlogDetails";
import Posts from "../pages/Posts/Posts/Posts";
import PrivateRoutes from "./PrivateRoutes";

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
                    return fetch(`http://localhost:5000/blogs/${params.id}`)
                }
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/posts",
                element: <PrivateRoutes><Posts /></PrivateRoutes>
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