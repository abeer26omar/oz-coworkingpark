
import React from "react";
// import Button from "../UI/Button";
import Paragraph from "../../UI/Paragraph";
const  MonoBlockCommunity = (props) => {
    return(
        <>
            <section className={` border-top mt-4`}>
                <div className="monoBlock bgBlack mt-4 ">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block text-center">
                                <Paragraph className='white_monoBlock_title'>
                                  Initiating a New Workstyle for Visionaries, Innovators & Thought-leaders in an Exclusive Members-Only haven, disrupting traditional spaces to Bridge the Gap between Work & Life.

                                </Paragraph>
                            </div>
                     
                    </div>
                </div>
            </div>
                </div>
            </section>
        </>
    );
}
export default React.memo(MonoBlockCommunity) ;