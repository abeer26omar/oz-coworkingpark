import React from "react";
import Buttons from "../Buttons/Buttons";
import Description from "../UI/Description";
import Paragraph from "../UI/Paragraph";
const  MonoBlockTitle = (props) => {
    console.log(props.configData)
return(<>

   <section className={`monoBlock bgBlack`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block text-center">
                                {props.configData ? props.configData.map((configItem, index) => (
                                    <React.Fragment key={index}>
                                        {configItem.key === 'home_page_mono_block_title' &&
                                     <Paragraph title={configItem.value}/>
                                         }                                  
                                        {configItem.key === 'home_page_mono_block_description' &&
                                         <Description className={'m_b_center'} desc={configItem.value}/>}
                                    </React.Fragment>
                                )):''}
                            </div>
                            <div
                                className="buttons d-lg-flex d-md-flex d-sm-block my-3 justify-content-center align-items-center text-center">
                                    <Buttons tagType = 'link' className={`btn button-outLine`}>
                                        Booking
                                    </Buttons>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>)
}
export default React.memo(MonoBlockTitle) ;