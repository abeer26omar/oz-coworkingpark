import { useEffect, useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { getCancelReasonsList } from '../../../../apis/Booking';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import { cancelBooking } from '../../../../apis/Booking';

const CancelationReasonModal = (props) => {

    const [cancelReasons, setCancelReasons] = useState([]);
    const { token, userId } = useContext(AuthContext);

    useEffect(()=>{
        const source = axios.CancelToken.source();

        getCancelReasonsList(token, userId, source).then(res=>{
            setCancelReasons(res);
        }).catch(err=>{});

        return ()=>source.cancel();
    },[token, userId]);

    const Cancel = ()=>{
        // cancelBooking(token, userId, props.booking_id, ).then(res=>{

        // }).catch
    };

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                keyboard={false}
                centered
                className='modal-invites'>
                    <Modal.Body className={`justify-content-center align-items-center p-4`}>
                        <Paragraph className="h2-description">Cancellation Booking</Paragraph>
                        <div className='my-4'>
                            { cancelReasons && cancelReasons.map((reason, index) => {
                                return (
                                    <div className="d-flex justify-content-center form-check border-bottom py-3" key={index}>
                                        <input className="form-check-input me-3" type="checkbox" value={reason.id} id={reason.id}/>
                                        <label className="form-check-label cancel_label" htmlFor={reason.id}>
                                            {reason.question}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='text-center'>
                            <Button 
                                tagType='link'
                                className="btn btn_outline_black btn_default auth_btn_padding"> 
                                save                                               
                            </Button>
                        </div>
                    </Modal.Body>
            </Modal>
        </>
    );
}
export default CancelationReasonModal;