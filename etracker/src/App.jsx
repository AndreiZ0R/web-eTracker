import React from 'react';
 import AppButton from './components_react/AppButton/AppButton.jsx';
import "./components_react/Background.css"
import "./components_react/Second_background.css";

import "./App.css";

// import { useEffect, useState } from 'react';


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
                        <div >  <AppButton class="buttonLogin" name="Admin"></AppButton></div>
                        <div >  <AppButton class="buttonLogin" name="Employee"></AppButton></div>
                    </div>
                    <div >  <AppButton name="Sing up"></AppButton></div></div>
                <div className="imagine">
                    <img src="logo.png" />
                </div>


            </div>
        </div>
    );
};

export default App;