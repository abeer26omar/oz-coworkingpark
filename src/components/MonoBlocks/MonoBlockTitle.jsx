import React from "react";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";

const  MonoBlockTitle = (props) => {
    return (
        <>
            <section className={`monoBlock bgBlack my-4`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block text-center">
                                {props.configData ? props.configData.map((configItem, index) => (
                                    <React.Fragment key={index}>
                                        {configItem.key === 'home_page_mono_block_title' &&
                                            <Paragraph className='white_monoBlock_title'>{configItem.value}</Paragraph>
                                        }                                  
                                        {configItem.key === 'home_page_mono_block_description' &&
                                            <Paragraph className={'m_b_center monoBlock_description w-75 mx-auto'}>{configItem.value}</Paragraph>
                                        }
                                    </React.Fragment>
                                )):''}
                            </div>
                            <div className="flex-sm-row flex-column my-3 justify-content-center align-items-center text-center">
                                <Button tagType = 'link' className={`btn button-outLine col`} to={'/booking'}>Booking</Button>
                                <Button tagType = 'link' className={`btn button-outLine my-3 col`} to={'/community/events'}>events</Button>
                                <Button tagType = 'link' className={`btn button-outLine col`} to={'/membership'}>memberships</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default React.memo(MonoBlockTitle) ;