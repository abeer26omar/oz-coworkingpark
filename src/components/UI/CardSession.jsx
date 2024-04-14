import { useEffect, useState } from "react";
import Alarm from "./Icons/Alarm";
import Calunder from "./Icons/Calunder";
import moment from 'moment';

const CardSession = ({index, session}) =>{
    const [keyIndex, setKeyIndex] = useState(index)

    useEffect(()=>{
        const formattedNumber = () => {
            if(index >=1 && index <= 9){
                setKeyIndex(`0${index}`)
            }else {
                setKeyIndex(index)
            }
        }
        formattedNumber()

    },[index])

    return (
        <div className="card d-flex  flex-column  justify-content-between card-sessions">
        {console.log(index)}
        <div className="d-flex  align-items-center mb-3">
            <div className="count_session">
                <h5 className="number_session mb-0">{keyIndex}</h5>
            </div>
                <p className="fit_session mb-0 mx-4">{session?.title}</p>
        </div>
        <div className="d-flex">
            <p className="times_session me_32 mb-0">
                <span className="me-2">
                <Alarm />
                </span>
                {Math.ceil(session?.duration / 60)}  MINUTES
            </p>
            <p className="times_session mb-0">
                <span className="me-2">
                <Calunder/>
                </span>
                {moment(session?.start_from_formatted).format("dddd")}
            </p>
        </div>
    </div>
    )
}
export default CardSession;