import React from 'react';
import {Link} from "react-router-dom";

const Buttons = (props) => {
    return (
        <>
            {props.tagType === 'link' && <Link className={`btn button-outLine ${props.className} `} to={props.href}
                                     onClick={props.onclick}>{props.children}</Link>}
            {props.tagType === 'button' && <button className={`${props.className} btn`} onClick={props.onclick}
                                             type={props.type}>{props.children}</button>}
        </>
    );
};

export default Buttons;
