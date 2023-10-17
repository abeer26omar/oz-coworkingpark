
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
                                    where like-minded people meet
                                </Paragraph>
                            </div>
                        <div
                            className="buttons d-lg-flex d-md-flex d-sm-block my-3 justify-content-center align-items-center text-center">
                                {/* <Button 
                                    tagType = 'link' 
                                    className={`btn button-outLine`}>
                                    Become  a Member
                                </Button> */}
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