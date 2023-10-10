
import React from "react";
import Buttons from "../Buttons/Buttons";
import Description from "../UI/Description";
const  MonoBlockMember = (props) => {
    console.log(props.configData)
return(<>

   <section className={`monoBlock bgBlack`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block">
                                {props.configData ? props.configData.map((configItem, index) => (
                                    <React.Fragment key={index}>
                                        {configItem.key === 'home_page_membership_title' && <h1 className="text-h1">{configItem.value}</h1>}
                                        {configItem.key === 'home_page_membership_title' && <Description className={'m_b_center'} desc={configItem.value}/>}
                                    </React.Fragment>
                                )):''}
                            </div>
                            <div
                                className="buttons d-lg-flex d-md-flex d-sm-block my-3 justify-content-center align-items-center text-center">
                                    <Buttons tagType = 'link' className={`btn button-outLine`}>
                                        Become  a Member
                                    </Buttons>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>)
}
export default MonoBlockMember;