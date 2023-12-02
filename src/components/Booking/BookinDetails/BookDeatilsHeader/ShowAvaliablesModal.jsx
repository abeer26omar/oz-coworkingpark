import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';

const ShowAvaliablesModal = (props) => {

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    const setTime = (obj) =>{
        const date = new Date(obj);
        const time = date.toLocaleTimeString('en-US', { timeStyle: 'medium' });
        return time;
    };

    const setLocalTime = (obj) => {
        const date = new Date(obj);
        const formattedTime = date.toISOString();
        return formattedTime;
    };

    const handleCheckboxChange = (event) => {
        const selectedValue = JSON.parse(event.target.value);
        setFrom(selectedValue.from);
        setTo(selectedValue.to);
    };

    const confirmBookingData = () => {
        const userData = JSON.parse(sessionStorage.getItem("BookingOZDetails"));
        const updatedUserData = {
            ...userData,
            time: {
                start: setLocalTime(from),
                end: setLocalTime(to)
            }
        };
        props.onConfirm(updatedUserData);
        props.onHide();
    }

    return (
        <>
            <Modal
                    show={props.show}
                    onHide={props.onHide}
                    keyboard={false}
                    backdropClassName="custom-backdrop"
                    centered>
                        <Modal.Body className={`justify-content-center align-items-center p-4`}>
                            <div className="bold-head mb-3 p-0">Room isn't available</div>
                            <Paragraph className="bold-head mb-3 p-0">avaliable Times</Paragraph>
                            <ul>
                                {props.avaliableDate && props.avaliableDate.map((item, index)=>{
                                    return (
                                        <div className="form-check" key={index}>
                                            <input 
                                                className="form-check-input"
                                                type="radio" 
                                                name="flexRadioDefault"
                                                value={JSON.stringify(item)} 
                                                id={`flexRadioDefault_${index}`}
                                                onChange={handleCheckboxChange} />
                                            <label className="form-check-label" htmlFor={`flexRadioDefault_${index}`} style={{
                                                fontSize: '14px'
                                            }}>
                                                from: {setTime(item.from)} - to : {setTime(item.to)}
                                            </label>
                                        </div>
                                    )
                                })
                                }
                            </ul>
                            <div className='text-center'>
                                <Button
                                    tagType='link'
                                    onClick={confirmBookingData}
                                    className='btn btn_outline_black w-75 py-2'>Confirm</Button>
                            </div>
                        </Modal.Body>
            </Modal>
        </>
    )
};

export default ShowAvaliablesModal;