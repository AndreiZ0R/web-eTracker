import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import SignUp from "./components_react/SignUp";
import Admin from "./components_react/Admin";
import Employee from "./components_react/Employee";
import NewEmployee from "./components_react/NewEmployee";
const router = createBrowserRouter([
    {
        path : "/signup",
        element: <SignUp/>
    },
    {
        path: "/admin",
        element: <Admin/>
    },
    {
        path: "/employee",
        element: <Employee/>
    },
    {
        path :"/newemployee",
        element: <NewEmployee/>
    },
    {
        path :"/",
        element: <Home/>
    }



]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);