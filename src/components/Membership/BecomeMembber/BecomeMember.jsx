import React from 'react';
import './BecomeMember.css';
import Media from "../../Media/Media";
import Paragraph from '../../UI/Paragraph';

const BecomeMember = ({configData}) => {
    return (
        <>
            <section className=" ">
                <div className="container-fluid">
                    <div className="row border-of-section">
                        {configData ? configData.map((configItem , index)=>(
                            <React.Fragment key={index}>
                                {(configItem.key === "membership_page_image" || configItem.key === "home_page_space_image")&&
                                    <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6 border-right img_block">
                                        <Media type="img"
                                            className="image-box w-100"
                                            src={configItem.value}
                                            alt="Our OZ Vision"
                                        />
                                    </div> }
                            </React.Fragment>  )):''}
                        <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-4">
                                {configData ? configData.map((configItem, index) => (
                                    <React.Fragment key={index}>
                                        {(configItem.key === 'membership_page_main_title' || configItem.key === 'home_page_space_title')&& (
                                            <h2 className='h2-text'>{configItem.value}</h2>                                        
                                        )}
                                        {configItem.key === 'membership_page_sub_title' && (
                                            <h2 className='h2-text-box achievement-text'>{configItem.value}</h2>                                        
                                        )}
                                        {(configItem.key === 'membership_page_description' || configItem.key === 'home_page_space_description') && (
                                            <Paragraph className='p-text-box'>{configItem.value}</Paragraph>    
                                        )}                                   
                                    </React.Fragment>
                                )): ''}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BecomeMember;
