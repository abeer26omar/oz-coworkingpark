import {useState, useEffect} from 'react';
import './GalleryShow.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
// import {GalleryData} from "../../../Data/GalleryData";
import Media from "../../Media/Media";
import axios from "axios";

const GalleryShow = () => {

    const [galleryData, setGalleryData] = useState([]);
    // 
    const [activeTab, setActiveTab] = useState();
    const handleTabClick = (key) => {
        setActiveTab(key);
    };
    // function handleCategorySelect(category) {
    //     setSelectedCategory(category);

    //     if (category === 'All') {
    //         setFilteredGalleryData(filteredGalleryData);
    //     } else {
    //         const filteredData = filteredGalleryData.filter((gallery) => gallery.category === category);
    //         setFilteredGalleryData(filteredData);
    //     }
    // }
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
    // const filterButtons = categories.map((category) => (
    //     <button
    //         key={category}
    //         className={selectedCategory === category ? ' btn btn-outline btn-filter-gallery  active ' : 'btn btn-outline btn-filter-gallery'}
    //         // onClick={() => {
    //         //     handleCategorySelect(category);
    //         // }}
    //     >
    //         {category}
    //     </button>
    // ));

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
                                Object.keys(galleryData).map((category) =>{
                                    return (
                                        <button 
                                            className={`btn btn-outline btn-filter-gallery border-0 ${category === activeTab ? 'active' : ''}`}
                                            type="button" 
                                            onClick={() => handleTabClick(category)}>{category}</button>
                                    )
                                })
                            }
                        </div>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                                <Masonry columnsCount={3} gutter="30px">
                                    {galleryData[activeTab] ? galleryData[activeTab].map((gallery) => {
                                        const {image, id, category, text, date, title} = gallery;
                                        return (
                                            <div key={id} className={`gallery-item ${category}`}>
                                                <div className="position-relative">
                                                    <Media
                                                        type="img" src={gallery.image} alt={`Gallery Item ${id}`}/>
                                                    <div className="gallery-description">
                                                        <h3>{title}</h3>
                                                        <span>{date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }): ''}
                                </Masonry>

                            </ResponsiveMasonry>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryShow;
