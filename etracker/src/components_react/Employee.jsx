import React from "react";
import "./Background.css"
import "./Dashboard.css"
import "./Second_background_sign_up.css";
import "./AppButton/AppButton"
import "./Admin.css";
const Employee =()=>{
    return (
        <div className="background">
            <div className="second_background">

                <div className="dashboard">
                    <div  >
                        <h1 className="AdminName">Hi, Popa Alexandru</h1>
                            <h2 className="Admin2">My Raports</h2>
                    </div>


                    <div className="imagine1">
                        <img src="admin.png"/>
                    </div>
                </div>

            </div>
        </div>


    );
}
export default Employee;