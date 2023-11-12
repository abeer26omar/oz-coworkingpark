import { useState } from 'react';
import OzysHeader from './OzysHeader';
import PrivateEventsDetailsList from '../PrivateEvents/PrivateEventsDetailsList';

const Ozys = () => {
    const [ozys, setOzys] = useState([]);

    return (
        <>
            <OzysHeader />
            <section className="private-events-details border-top">
                <div className="container-fluid">
                    {ozys.map((prevent, index) => {
                        const {id, address, img, places} = prevent;
                        return (
                            <div className="row border-of-section" key={index} name={address}>
                                <PrivateEventsDetailsList 
                                    id={id} 
                                    address={address} 
                                    img={img} 
                                    index={index}
                                    places={places}/>
                            </div>
                        )
                    })}

                </div>
            </section>
        </>
    )
};
export default Ozys;