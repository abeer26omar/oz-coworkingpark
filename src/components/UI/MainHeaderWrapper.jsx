import React, { useState } from 'react';
import classes from './MainHeaderWrapper.module.css';
import { useEffect } from 'react';

const MainHeaderWrapper = (props)=>{
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(props.image){
                if(props.image.length > 1){
                    setImageIndex((prevIndex) => (prevIndex + 1) % props.image.length);
                }
            }
        },5000);

        return ()=>clearInterval(timer);
    },[imageIndex]);

    return (
       <div className={`position-relative`}>
            <div className={`${classes.header_bg} ${props.special_flex}`}>
                {props.video && <video className={`${classes.video_bg}`} alt="oz video" src={props.video} autoPlay muted loop />}
                {props.image && 
                    <div style={
                        {
                            backgroundImage: `url(${props.image[imageIndex].image || props.image})`,
                        }
                    } className={`${classes.img_bg}`}></div>
                }
                <div className={'position-relative py-5'} style={{
                    zIndex: 99
                }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default MainHeaderWrapper;