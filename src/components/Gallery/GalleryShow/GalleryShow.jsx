import {useState, useEffect} from 'react';
import './GalleryShow.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
// import {GalleryData} from "../../../Data/GalleryData";
import Media from "../../Media/Media";
import axios from "axios";
import Button from '../../UI/Button';

const GalleryShow = () => {

    const [galleryData, setGalleryData] = useState([]);
    const [activeTab, setActiveTab] = useState();
    const handleTabClick = (key) => {
        setActiveTab(key);
    };
    useEffect(()=>{
        const getGalleryData = async ()=>{
            try{
                const config = {
                    method: 'get',
                    url: `${process.env.REACT_APP_API_CONFIG_URL}/api/gallery`
                };
                const response = await axios(config);
                setGalleryData(response.data.data);
                const initialTab = Object.keys(response.data.data)[0];
                setActiveTab(initialTab);
            }catch(error){
                console.error(error);
            }
        }
        getGalleryData();
    },[]);
    
    useEffect(() => {
        if (activeTab && galleryData[activeTab]) {
            console.log(galleryData[activeTab]);
        }
    }, [activeTab, galleryData]);

    return (
        <>
            <section className="gallery-show">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-date">
                                <h2>My 2023</h2>
                            </div>
                        </div>
                        <div className="filterButtons">
                            {
                                Object.keys(galleryData).map((category, index) =>{
                                    return (
                                        <button
                                            key={index} 
                                            className={`btn btn-outline btn-filter-gallery border-0 ${category === activeTab ? 'active' : ''}`}
                                            type="button" 
                                            onClick={() => handleTabClick(category)}>{category}</button>
                                    )
                                })
                            }
                        </div>
                        <div className='container'>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                                <Masonry columnsCount={3} gutter="30px">
                                    {galleryData[activeTab] ? galleryData[activeTab].map((gallery) => {
                                        const {image, id, category, text, date, title} = gallery;
                                        return (
                                            <div key={id} className={`gallery-item mx-auto ${category}`}>
                                                <div className="position-relative m-auto">
                                                    <Media
                                                        type="img" className="w-100" src={gallery.image} alt={`Gallery Item ${id}`}/>
                                                    <div className="gallery-description">
                                                        <Button tagType='link' className='p-0 add_fav_dark'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                                <g filter="url(#filter0_b_4956_8310)">
                                                                    <rect x="0.5" y="0.5" width="47" height="47" stroke="white"/>
                                                                </g>
                                                                <path d="M27.7697 30.4059L20.6738 25.7227" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                                                <path d="M27.8907 17.1309L20.7949 21.8141" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                                                <path d="M20.6682 23.3419C20.6682 25.1833 19.1755 26.676 17.3341 26.676C15.4927 26.676 14 25.1833 14 23.3419C14 21.5005 15.4927 20.0078 17.3341 20.0078C19.1755 20.0078 20.6682 21.5005 20.6682 23.3419Z" stroke="white" stroke-width="1.5"/>
                                                                <path d="M34.0061 32.6661C34.0061 34.5075 32.5134 36.0002 30.672 36.0002C28.8306 36.0002 27.3379 34.5075 27.3379 32.6661C27.3379 30.8248 28.8306 29.332 30.672 29.332C32.5134 29.332 34.0061 30.8248 34.0061 32.6661Z" stroke="white" stroke-width="1.5"/>
                                                                <path d="M34.0061 15.3341C34.0061 17.1755 32.5134 18.6682 30.672 18.6682C28.8306 18.6682 27.3379 17.1755 27.3379 15.3341C27.3379 13.4927 28.8306 12 30.672 12C32.5134 12 34.0061 13.4927 34.0061 15.3341Z" stroke="white" stroke-width="1.5"/>
                                                                <defs>
                                                                    <filter id="filter0_b_4956_8310" x="-6" y="-6" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
                                                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4956_8310"/>
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4956_8310" result="shape"/>
                                                                    </filter>
                                                                </defs>
                                                            </svg>
                                                        </Button>
                                                        <div className='py-5'></div>
                                                        <div className='text-center'>
                                                            <h3>{title}</h3>
                                                            <span>{date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }): ''}
                                </Masonry>

                            </ResponsiveMasonry>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryShow;
