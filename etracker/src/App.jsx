import React from 'react';
import Btn from './components_react/test.jsx';
import "./App.css";
import { useEffect, useState } from 'react';


const App = () => {
    return (
        <div className="box">
            <nav>
                <NavLink to='/Create a account'>
                    Sign In
                </NavLink>
                <NavLink to='Sign in as Admin'>
                    Sign in as Admin
                </NavLink>
                <Navlink to='Sign in as Employee'>
                    Sign in as Employee
                </Navlink>
                <NavLink to='About us'>
                    About us
                </NavLink>

            </nav>
        </div>
    );
};

export default App;
