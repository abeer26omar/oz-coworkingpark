import {Link, NavLink, useRouteLoaderData} from "react-router-dom";
import { useState } from "react";

const Inqure =()=>{
    const [Open , SetOpen] = useState(true);
    const token = useRouteLoaderData('root');


    return(<>
    <div className="d-flex justify-content-between">
                            <NavLink
                                onClick={()=>SetOpen(!Open)}
                                    className="nav-link links-margin"
                                    to={"/contactus"}
                                >
                                    inquire
                            </NavLink>
                                <svg
                                        width="2"
                                        height="34"
                                        viewBox="0 0 2 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 0L0.999999 34"
                                            stroke="black"
                                            stroke-width="0.5"
                                            className="log-border  "
                                        />
                                </svg>
                            {!token && (<NavLink
                                onClick={()=>SetOpen(!Open)}
                                    className="nav-link links-margin"
                                    to={"/login"}
                                >
                                    Login
                            </NavLink>)}
                        {/* <LoginNav/> */}
                        </div>
    
    
    </>)
}
export default Inqure;