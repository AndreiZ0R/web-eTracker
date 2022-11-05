import React from 'react';
 import AppButton from './components_react/AppButton/AppButton.jsx';
import "./components_react/Background.css"
import "./components_react/Second_background.css";
import NavBar from './components_react/NavBar/NavBar.jsx';
import "./App.css";

// import { useEffect, useState } from 'react';


const App = () => {

    return (
        <div className="background">
            <div className="second_background">
                <div className="center">                <div >  <AppButton name="Sign up"></AppButton></div>
                <div >  <AppButton name="Admin"></AppButton></div>
                <div >  <AppButton name="Employee"></AppButton></div></div>


            </div>
        </div>
    );
};

export default App;