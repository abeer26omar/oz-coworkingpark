import React from 'react';
import classes from './MainHeaderWrapper.module.css';
import Media from '../Media/Media';

const MainHeaderWrapper = (props)=>{
    return (
        <div className={`position-relative`}>
            <div className={`${classes.header_bg}`}>
                {props.video && <video className={`${classes.video_bg}`} alt="Group" src={props.video} autoPlay muted loop />}
                {props.image && <Media type = 'img' alt="Group" src={props.image} className={`${classes.video_bg}`} />}
                {/* {props.configData &&
                props.configData.map((configItem, index) => {
                    if (configItem.key.includes('video')) {
                      return (
                        <React.Fragment key={index}>
                            <video className={`${classes.video_bg}`} alt="Group" src={configItem.value} autoPlay muted loop />
                        </React.Fragment>
                      )
                    }
                    return <video className={`${classes.video_bg}`} alt="Group" src={props.video} autoPlay muted loop />;
                  })} */}
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