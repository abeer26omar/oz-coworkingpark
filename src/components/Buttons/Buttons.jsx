import React from 'react';
import {Link} from "react-router-dom";

const Buttons = (props) => {
    return (
        <>
            {!props.tagType && <Link className={`btn button-outLine btn-bg-white ${props.className} `} to={props.href}
                                     onClick={props.onclick}>{props.children}</Link>}
            {props.tagType && <props.tagType className={`${props.className} btn`} onClick={props.onclick}
                                             type={props.type}>{props.children}</props.tagType>}
        </>
    );
};

export default Buttons;
