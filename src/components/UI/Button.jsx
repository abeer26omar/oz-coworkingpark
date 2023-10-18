import React from 'react';
import {Link} from "react-router-dom";
import './Button.css';
const Button = (props) => {
    return (
        <>
            {props.tagType === 'link' && <Link className={`btn_default ${props.className} `} to={props.to}
                                     onClick={props.onClick}>{props.children}</Link>}
            {props.tagType === 'button' && <button className={`${props.className} btn_default`} onClick={props.onClick}
                                             type={props.type}>{props.children}</button>}
        </>
    );
};

export default Button;
