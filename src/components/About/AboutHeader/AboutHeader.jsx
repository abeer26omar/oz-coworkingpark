import React from 'react';
import about from "../../../assets/images/about/aboutHeader.png";
import Media from "../../Media/Media";
import Paragraph from '../../UI/Paragraph';
import Description from '../../UI/Description';
const AboutHeader = () => {
    return (
        <>
            <div className="box about-box">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <Media type="img" className="img" alt="Group" src={about}/>
                            <div className="group-2 about-group">
                            <Paragraph  title={'We Are a place for creative and fun'}/>                               
                            <Description className={'my-40 w-50 m-auto'} desc={'Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sitipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit '}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(AboutHeader);
