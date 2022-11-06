import React from 'react';
import AppButton from './components_react/AppButton/AppButton.jsx';
import "./components_react/Background.css"
import "./components_react/Second_background.css";

import "./App.css";
import Admin from "./components_react/Admin";

// import { useEffect, useState } from 'react';
import "./components_react/AppButton/AppButton.css"
import {Button, colors} from "@mui/material";
import {Link} from "react-router-dom"
import { css } from '@emotion/react'
import styled from '@emotion/styled'


const Home = () => {

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
                        <div><AppButton myClass="buttonLogin"
                                        name="Admin" >
                            <Link  style={{textDecoration: 'none',color:"white"}} to="/Admin" >Admin</Link>
                        </AppButton></div>
                        <div><AppButton myClass="buttonLogin" name="Employee"> <Link  style={{textDecoration: 'none',color:"white"}}
                            to="/Employee">Employee</Link>
                        </AppButton>
                        </div>

                    </div>
                    <div>
                        <AppButton myClass="HomePageButton" onClick={() => {
                            console.log("clicked sign up");
                        }} name="Sign up">
                            <Link  style={{textDecoration: 'none',color:"white"}} to="/SignUp">SignUp</Link>
                        </AppButton></div>
                </div>
                <div className="imagine">
                    <img src="logo.png"/>
                </div>

            </div>
        </div>
    );
}

export default Home;