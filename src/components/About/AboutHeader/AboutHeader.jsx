import React from 'react';
import about from "../../../assets/images/about/aboutHeader.png";
import Media from "../../Media/Media";
import Paragraph from '../../UI/Paragraph';
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
const AboutHeader = (props) => {
    const image = props.configData ? props.configData.map((configItem, index) => {
        if (configItem.key === 'about_us_page_image')
        {
            return configItem.value
        }
    }) : about;
    return (
        <>
            <MainHeaderWrapper configData={props.configData} image={image} special_flex={`justify-content-center`}>
                <div className={`container-fluid px-70 py-5 text-center`}>
                    <div className='col-xl-6 col-lg-10 col-12 mx-auto'>
                        {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'about_us_page_header_title' && (
                                    <Paragraph className='head_paragraph mb-3'>{configItem.value}</Paragraph>
                                )}
                                {configItem.key === 'about_us_page_header_main_description' && (
                                    <Paragraph className='description mb-0'>{configItem.value}</Paragraph>
                                )}
                            </React.Fragment>
                        )): ''}
                    </div>
                </div>
            </MainHeaderWrapper>
        </>
    );
};

export default React.memo(AboutHeader);
