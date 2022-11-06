import React from 'react';
import "./AppButton.css";


const AppButton = (props) => {
    return (
        <button className={props.myClass} onClick={props.onClick}>
            {
                props.name
            }
        </button>
    );
}
export default AppButton;