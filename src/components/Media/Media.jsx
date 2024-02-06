import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Media = (props) => {
    return (
        <>
            {props.type === 'img' &&
                <img
                    src={props.src}
                    alt={props.alt}
                    loading="lazy"
                    width={props.width}
                    height={props.height}
                    className={props.className}
                    onClick={props.onClick}
                />
            }
            {props.type === 'video' &&
                <video 
                    className={props.className}
                    src={props.src} 
                    alt={props.alt} 
                    loading="lazy" 
                    width={props.width} 
                    height={props.height} 
                    controls={props.controls} 
                    autoPlay={props.autoPlay} />}
        </>
    );
};

export default Media;
