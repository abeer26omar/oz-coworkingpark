import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import './CommunityEventsExplore.css';
import MultipleEventSlider from "./CommunityEventsSliders/MultipleEventSlider";
import SingleEventSlider from "./CommunityEventsSliders/SingleEventSlider";
import CommunityExploreHeader from "./CommunityEventsExploreHeader/CommunityExploreHeader";
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import { getEventsList } from '../../../../apis/Events';

const CommunityEventsExplore = () => {

    const [eventsData, setEventsData] = useState([]);
    const { token, UserId } = useContext(AuthContext);

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchNewsFeedPosts = async () => {
            try{
                const res = await getEventsList(token, UserId, source);
                if (isMounted) {
                    setEventsData(res);
                }
            }catch (error){

            }
        }
        fetchNewsFeedPosts();

        return ()=>{
            isMounted = false;
            source.cancel();
        };
    },[]);

    return (
        <>
            <div className="bg-body-tertiary navigator-feed">
                <div className='container-fluid'>
                    <div className='d-flex'>
                        <h1 className="title-name mb-0">
                            Community events
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2"
                            height="127"
                            viewBox="0 0 2 127"
                            fill="none"
                        >
                            <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
            </div>


            <CommunityExploreHeader/>

            <section className="events-show border-bottom border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 single-margin ">
                            <div className="single-event-slider ">
                                <SingleEventSlider eventsData={eventsData} />
                            </div>
                        </div>
                        <div className="col-lg-6 border-left">
                            <div className="multiple-event-slider ">
                                <MultipleEventSlider eventsData={eventsData} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="monoBlock bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block text-center">
                                <h1 className="white_monoBlock_title black mb-4">I'LL BE AT OZ </h1>
                                <p className="m_b_center monoBlock_description w-75 mx-auto black">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem
                                    ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet,
                                    consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing
                                    elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</p>
                            </div>
                            <div className="buttons d-flex justify-content-center align-items-center">
                                <a href="#" className="btn button-outLine btn-bg-white">Become a Member</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CommunityEventsExplore;
