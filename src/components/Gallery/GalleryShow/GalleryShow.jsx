import {useState, useEffect} from 'react';
import './GalleryShow.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
// import {GalleryData} from "../../../Data/GalleryData";
import Media from "../../Media/Media";
import axios from "axios";
import Button from '../../UI/Button';
import ShareButton from '../../UI/ShareButton';

const GalleryShow = () => {

    const [galleryData, setGalleryData] = useState([]);
    const [activeTab, setActiveTab] = useState();
    const [url, setUrl] = useState('');

    const handleTabClick = (key) => {
        setActiveTab(key);
    };
    useEffect(()=>{
        const fullUrl = window.location.href;
        setUrl(fullUrl);

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
                                                       <ShareButton border={true} shareUrl={url} fav_dark={true}/>
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
