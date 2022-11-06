import React from "react";
import "./Background.css"
import "./Dashboard.css"
import "./Second_background_sign_up.css";
import "./AppButton/AppButton"
import "./Admin.css";
import AppButton from "./AppButton/AppButton";
import {Link} from "react-router-dom";
const Admin= ()=>{

    return (
        <div className="background">
            <div className="second_background">

                <div className="dashboard">
                    <div  >
                        <h1 className="AdminName">Hi, Popa Alexandru</h1></div>
                    <div><AppButton myClass="Admin1"
                                    name="NewEmployee" >
                        <Link  style={{textDecoration: 'none',color:"white"}} to="/NewEmployee" >Add new employee</Link>
                    </AppButton></div>
                    <div className="imagine1">
                        <img src="admin.png"/>
                    </div>

                </div></div>
        </div>


    );
}
export default Admin;