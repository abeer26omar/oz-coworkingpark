import React from 'react';
import headVideo from '../../assets/images/videos/header.mp4';
import classes from './MainHeaderWrapper.module.css';

const MainHeaderWrapper = (props)=>{
    return (
        <div className={`position-relative`}>
            <div className={`${classes.header_bg}`}>
                {props.configData ? props.configData.map((configItem, index) => (
                    <React.Fragment key={index}>
                        {configItem.key === 'home_page_header_video' && 
                            (
                                <video className={`${classes.video_bg}`} alt="Group" src={headVideo} autoPlay muted loop/>
                            )}
                    </React.Fragment>
                )): ''}
                <div className={`position-relative py-5`} style={{
                    zIndex: 99
                }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default MainHeaderWrapper;