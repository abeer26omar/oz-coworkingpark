import React ,{useEffect , useContext, useState} from 'react';
import './PrivateEventsDetails.css';
import {PrivateEventsData} from "../../Data/PrivateEventsData";
import PrivateEventsDetailsList from "./PrivateEventsDetailsList";
import { Element } from 'react-scroll';
import { getPrivateEvent } from '../../apis/config';
import { AuthContext } from '../../apis/context/AuthTokenContext';
const PrivateEventsDetails = () => {
const [privateEvent, setPrivateEvent] = useState();
  const { token } = useContext(AuthContext);

useEffect(()=>{
     const controller = new AbortController();
    const signal = controller.signal;
    const events  = async () =>{
        try{
        const res = await  getPrivateEvent(token, signal)
        // console.log(res);
        setPrivateEvent(res)
        }catch(error){

        }
    }
    events()
return () => controller.abort();

},[])
    return (
        <>
            <section className="private-events-details">
                <div className="container-fluid">

                    {privateEvent?.map((prevent, index) => {
                        const {id, description_1 , description_2 , pdf, title , image} = prevent;
                        const isEven = index % 2 === 0;
                        const reverse = !isEven;
                        return (
                            <Element>
                                <div className={`row border-top border-bottom ${reverse ? 'flex_reverse' : ''}`} key={index} name={title}>
                                    <PrivateEventsDetailsList 
                                        id={id} 
                                        address={title} 
                                        image={image} 
                                        desc={description_1}
                                        desc_2={description_2}
                                        index={index}
                                        hrefTag={pdf}
                                        // places={places}
                                        />
                                </div>
                            </Element>
                        )

                    })}

                </div>
            </section>

        </>
    );
};

export default PrivateEventsDetails;
