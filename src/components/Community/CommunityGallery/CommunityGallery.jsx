import React from "react";
import Media from "../../Media/Media";
import Paragraph from "../../UI/Paragraph";
import { NavLink } from "react-router-dom";

const CommunityGallery = (props) => {
    return (
        <>
            <section id="community-gallery" className="gallery">
                <div className="container-fluid">
                    <div className="row border-of-section ">


                             {props.configData ? props.configData.map((configItem, index) => (
                                    <React.Fragment key={index}>
                                        {configItem.key === "community_page_gallery_image" && 
                                        <div className="col-md-8 col-lg-8 col-sm-12 col-xs-6 border-right">
                                              <Media
                                               type="img"
                                               className="image-box w-100"
                                               src={configItem.value}
                                               alt="Our OZ Vision"
                                                 />
                                        </div>
                                        }
                                    </React.Fragment>
                                        )):''}
                                        <div  className="col-md-4 col-lg-4 col-sm-12 col-xs-6 m-auto "> 
                                            <div className="box-content px-60" >
                                        {props.configData ? props.configData.map((configItem , index)=>(
                                            <React.Fragment key={index}>
                                                
                                                {configItem.key === "community_page_gallery_title"&&
                                                <Paragraph className='white_monoBlock_title black'>
                                                {configItem.value}</Paragraph>
                                                    }
                                                     {configItem.key === "community_page_gallery_description"&&
                                                <Paragraph className='m_b_center monoBlock_description w-75 mx-auto black'>
                                                {configItem.value}</Paragraph>
                                                    }                                           
                                            </React.Fragment>
                                        )):''}
                                          <NavLink to={"/community/galleryshow"}
                                          className="btn button-outLine btn-bg-white mx-3">Explore</NavLink>  
                                            </div>
                                        </div>                       
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommunityGallery;
