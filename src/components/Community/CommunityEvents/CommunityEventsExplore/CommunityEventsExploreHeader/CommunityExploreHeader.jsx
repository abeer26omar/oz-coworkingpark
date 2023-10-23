import React from 'react';
import party from "../../../../../assets/images/party.png";
import './CommunityExploreHeader.css';
import { useData } from '../../../../../apis/auth_api/Createdata';
import { useEffect ,useState } from 'react';
import MainHeaderWrapper from '../../../../UI/MainHeaderWrapper';
import Paragraph from '../../../../UI/Paragraph';
const CommunityExploreHeader = () => {
const DataLocation = useData();
const page_home = DataLocation.config('community')
const [data , setData] = useState([page_home]);
 useEffect(()=>{
        page_home.then(res =>{
            setData(res)
            console.log(res);
        })
        .catch(err =>{
         
        })
    },[]);

    
    return (
        <>
          
                  <MainHeaderWrapper configData={data} image={party}>
                <div className={`container-fluid px-70 py-5`}>
                    <div className='col-md-6 col-12'>
                        <p class="main_header mb-0">Initiating</p>
                        { data? data.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === "community_page_event_title" && (
                                    <Paragraph className='head_paragraph mb-3'>{configItem.value}</Paragraph>
                                )}
                                {configItem.key === "community_page_event_description" && (
                                    <Paragraph className='description mb-0'>{configItem.value}</Paragraph>
                                )}
                            </React.Fragment>
                        )): ''}
                    </div>
                </div>
            </MainHeaderWrapper>


        </>
    );
};

export default CommunityExploreHeader;
