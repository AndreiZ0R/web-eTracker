import React from 'react';
import "./AppButton.css";


const AppButton = (props) => {
    return (
        <button className={props.myClass} onClick={props.onClick}>
            {
                props.children
            }
        </button>
    );
}
export default AppButton;