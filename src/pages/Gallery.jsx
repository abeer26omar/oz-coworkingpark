import React from 'react';
import GalleryHeader from "../components/Gallery/GalleryHeader/GalleryHeader";
import GalleryShow from "../components/Gallery/GalleryShow/GalleryShow";
import { config } from '../apis/config';
import { useEffect ,useState } from 'react';
const Gallery = () => {
    const [data , setData] = useState([])
useEffect(()=>{
    setData(config('gallery '))
},[])
    return (
        <>
            <GalleryHeader/>
            <GalleryShow/>
        </>
    );
};

export default Gallery;
