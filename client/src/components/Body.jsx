import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import Feed from './Feed.jsx';

function Body() {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    path:"/",
                    element:<Feed/>
                },
                {
                    path:"/profile/:id",
                    element:<Profile/>
                }
            ]
        },
        {
            path:"/login",
            element:<Login/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body