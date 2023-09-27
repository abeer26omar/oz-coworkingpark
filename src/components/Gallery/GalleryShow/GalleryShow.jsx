import React, {useState} from 'react';
import './GalleryShow.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {GalleryData} from "../../../Data/GalleryData";
import Media from "../../Media/Media";

const GalleryShow = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredGalleryData, setFilteredGalleryData] = useState(GalleryData);

    function handleCategorySelect(category) {
        setSelectedCategory(category);

        if (category === 'All') {
            setFilteredGalleryData(GalleryData);
        } else {
            const filteredData = GalleryData.filter((gallery) => gallery.category === category);
            setFilteredGalleryData(filteredData);
        }
    }

    const categories = ['All', 'Events', 'Exhibition', 'F&B'];

    const filterButtons = categories.map((category) => (
        <button
            key={category}
            className={selectedCategory === category ? ' btn btn-outline btn-filter-gallery  active ' : 'btn btn-outline btn-filter-gallery'}
            onClick={() => {
                handleCategorySelect(category);
            }}
        >
            {category}
        </button>
    ));

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
                        <div className="filterButtons">{filterButtons}</div>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry columnsCount={3} gutter="30px">
                                {filteredGalleryData.map((gallery, index) => {
                                    const {img, id, category, text, date, title} = gallery;
                                    return (
                                        <div key={id} className={`gallery-item ${category}`}>
                                            <div className="position-relative">
                                                <Media
                                                    type="img" src={img} alt={`Gallery Item ${id}`}/>
                                                <div className="gallery-description">
                                                    <h3>{title}</h3>
                                                    <span>{date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Masonry>

                        </ResponsiveMasonry>


                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryShow;
