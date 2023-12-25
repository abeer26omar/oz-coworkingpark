import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Media = (props) => {
    return (
        <>
            {props.type === 'img' &&
                <LazyLoadImage
                    src={props.src}
                    alt={props.alt}
                    loading="lazy"
                    width={props.width}
                    height={props.height}
                    className={props.className}
                    effect="blur"
                    onClick={props.onClick}
                />
            }
            {props.type === 'video' &&
                <video 
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
