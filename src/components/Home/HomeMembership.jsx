import React from "react";
import Paragraph from "../UI/Paragraph";
import Button from '../UI/Button';
import MembershipTypesSlider from "../Membership/MembershipTypes/MembershipTypesSlider";

const HomeMembership = (props) => {
    return (
        <>
            <section className="membership-types">
                <div className="container-fluid">
                    <div className="row">                
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <Paragraph className='head_feature'>{'Membership'}</Paragraph>                              
                            </div> 
                        </div>               
                            {/*  */}
                        <div className="border-of-section">
                            <div className="row p-5 justify-content-between align-items-center">
                                <div className="col-sm-12 col-lg-5">
                                    <Paragraph className='paragraph_black'>{'Explore Memberships'}</Paragraph>
                                </div>
                                <div className="col-sm-12 col-lg-7 m-auto">
                                    <Paragraph className='description_black'>{"Discover our comprehensive range of flexible memberships meticulously designed to cater to your unique needs. Whether you're a freelancer, entrepreneur, part of a dynamic team, or represent an esteemed enterprise, we have the ideal membership option to suit your professional requirements. Step into OZ and unlock a world of meticulously crafted private workspaces. From versatile hot desks and dedicated workstations to sophisticated private studios and lounges, our diverse range of offerings caters to individuals and teams of all sizes."}</Paragraph>
                                </div>
                                {/* {props.configData ? props.configData.map((configItem , index)=>(
                                    <React.Fragment key={index}>
                                        {configItem.key === "home_page_event_title" && 
                                        <div className="col-sm-12 col-lg-5">
                                            <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>
                                        </div>                           
                                        }
                                        {configItem.key === "home_page_event_description" &&
                                            <div className="col-sm-12 col-lg-7 m-auto">
                                                <Paragraph className='description_black'>{configItem.value}</Paragraph>
                                            </div>                            
                                        }
                                    </React.Fragment>                                
                                )):''} */}
                            </div>                                 
                                <MembershipTypesSlider />
                            <div className="col-lg-12 text-center py-4">
                            <Button
                                tagType='link' 
                                to={`/membership`} 
                                className="btn button-outLine btn-bg-white">{'explore'}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default React.memo(HomeMembership) ;
