import React from 'react';
import "./AppButton.css";
import 'bulma/css/bulma.min.css';


const AppButton = (props) => {
    return (
        <button className="HomePageButton" onClick={props.onClick}>
            {
                props.name
            }
        </button>
    );
}
export default AppButton;