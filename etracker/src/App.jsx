import React from 'react';
 import AppButton from './components_react/AppButton/AppButton.jsx';
import "./components_react/Background.css"
import "./components_react/Second_background.css";

import "./App.css";
import Admin    from "./components_react/Admin"; "./components_react/Admin";
// import { useEffect, useState } from 'react';
import "./components_react/AppButton/AppButton.css"
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";

const App = () => {

    return (

        <div className="background">
            <div className="second_background">
                <div className="bluebox">
                    <div className="login">Login as</div>
                </div>
                <div className="shadow">
                <div className="whitebox"></div>
                <div className="smallwhitebox"></div>
                </div>
                <div className="center">
                    <div className="center1">
                    <Router>   <div >  <AppButton myClass="buttonLogin" onClick={()=>alert("mama") } name="Admin"></AppButton></div></Router>
                        <div >  <AppButton myClass="buttonLogin" onClick={()=>alert("mama")} name="Employee"></AppButton></div>

                    </div>
                    <div >  <AppButton myClass="HomePageButton"  onClick={()=>{
                        console.log("clicked sign up");
                    }} name="Sign up"></AppButton></div></div>
                <div className="imagine">
                    <img src="logo.png" />
                </div>


            </div>
        </div>
    );
};

export default App;