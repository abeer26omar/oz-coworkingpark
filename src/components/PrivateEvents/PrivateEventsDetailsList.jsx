import React from 'react';
import PlaceItem from "./PlaceItem";
import Paragraph from '../UI/Paragraph';
import Button from '../UI/Button';

const PrivateEventsDetailsList = ({address, img, id, index, places}) => {
    const isEven = index % 2 === 0;
    const reverse = !isEven;


    if (reverse) {

        return (
            <>
                <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto">
                    <div className="box-content px-4">
                        <Paragraph className="h2-text-box">{address}</Paragraph>
                        <Paragraph className="p-text-box">
                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                            amet, consectetur dipiscing
                        </Paragraph>
                        <ul className="places">
                            {places.map((place) => (
                                <PlaceItem
                                    key={place.id}
                                    place={place}
                                    img={img}
                                    setActiveImg={(images) => {
                                        document.getElementById(`image-place-${id}`).src = images;
                                    }}
                                />
                            ))}
                        </ul>
                        <div className="d-flex buttons-group">
                            <Button to="/contactus" className="btn button-outLine btn-bg-white" tagType='link'>inquire</Button>
                            <a href="#!" className="btn button-outLine btn-bg-white btn-pdf" title='comming Soon' style={{
                                cursor: 'not-allowed'
                            }}>Download PDF</a>

                        </div>

                    </div>

                </div>
                <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6 m-auto border-left">
                    <figure className="">
                        <img
                            id={`image-place-${id}`}
                            src={img}
                            className="figure-img img-fluid image-box w-100"
                            alt="news feed"
                        />
                    </figure>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6 m-auto border-right">
                    <figure className="">
                        <img
                            id={`image-place-${id}`}
                            src={img}
                            className="figure-img img-fluid image-box w-100"
                            alt="news feed"
                        />
                    </figure>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto">
                    <div className="box-content px-4">
                        <Paragraph className="h2-text-box">{address}</Paragraph>
                        <Paragraph className="p-text-box">
                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                            amet, consectetur dipiscing
                        </Paragraph>
                        <ul className="places">
                            {places.map((place) => (
                                <PlaceItem
                                    key={place.id}
                                    place={place}
                                    img={img}
                                    setActiveImg={(images) => {
                                        document.getElementById(`image-place-${id}`).src = images;
                                    }}
                                />
                            ))}
                        </ul>
                        <div className="d-flex buttons-group">
                            <Button to="/contactus" className="btn button-outLine btn-bg-white" tagType='link'>inquire</Button>
                            <a href="#!" className="btn button-outLine btn-bg-white btn-pdf" title='comming Soon' style={{
                                cursor: 'not-allowed'
                            }}>Download PDF</a>
                        </div>

                    </div>
                </div>
            </>
        );
    }
};


export default PrivateEventsDetailsList;
