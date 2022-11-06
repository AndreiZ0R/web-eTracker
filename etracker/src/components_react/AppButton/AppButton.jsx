import React from 'react';
import "./AppButton.css";


const AppButton = (props) => {
    return (
        <button className="HomePageButton" {...props} onClick={props.onClick}>
            {
                props.name
            }
        </button>
    );
}
export default AppButton;