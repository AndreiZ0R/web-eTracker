import React from 'react';
import "./NavBar.css";
const NavBar = () => {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" >
                <img className="image is-128x128" src="logo.png"  alt="logo"/>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>s
            </a>
        </div>

        <div id="navbar" className="navbar-menu">
            <div className="navbar-end">
                <a className="navbar-item">
                    Home
                </a>

                <a className="navbar-item">
                    About Us
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Sign In
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-end">
                            Sign in as Admin
                        </a>
                        <a className="navbar-end">
                            Sign in as Employee
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    );
}


export default NavBar;