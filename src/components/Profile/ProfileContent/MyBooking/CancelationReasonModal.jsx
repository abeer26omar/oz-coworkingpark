import { useEffect, useState, useContext } from 'react';
import {Formik} from 'formik';
import * as Yup from "yup";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { getCancelReasonsList } from '../../../../apis/Booking';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import { cancelBookingReason, cancelBooking } from '../../../../apis/Booking';
import SweetAlert2 from 'react-sweetalert2';
import { useNavigate } from 'react-router-dom';

const CancelationReasonModal = (props) => {

    const [cancelReasons, setCancelReasons] = useState([]);
    const [swalProps, setSwalProps] = useState({});
    const [answer, setReason] = useState('');
    const { token, userId } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const source = axios.CancelToken.source();

        getCancelReasonsList(token, userId, source).then(res=>{
            setCancelReasons(res);
        }).catch(err=>{});

        return ()=>source.cancel();
    },[token, userId]);

    const Cancel = async (values)=>{
        try{
            const result = await cancelBookingReason(token, userId, props.booking_id, values.cancelReason, answer);
            if(result){
                try{
                    const res = await cancelBooking(token, userId, props.booking_id);
                    setSwalProps({
                        show: true,
                        icon: 'success',
                        title: res.status,
                        text: res.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/profile/mybooking');
                }catch(error){
                    setSwalProps({
                        show: true,
                        icon: 'error',
                        title: error.response.data.status,
                        text: error.response.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
            setSwalProps({
                show: true,
                icon: 'success',
                title: result.status,
                text: result.message,
                showConfirmButton: false,
                timer: 1500
            });
        }catch(error){
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
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
                        <Formik
                            initialValues={{
                                cancelReason: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                Cancel(values)
                            }}
                            validationSchema={
                                Yup.object().shape({
                                    cancelReason: Yup.string().required()
                                })
                            }
                            >
                                {({ 
                                    values, 
                                    touched,
                                    errors,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit }) => (

                                    <form className='m-4' onSubmit={handleSubmit}>
                                        { cancelReasons && cancelReasons.map((reason, index) => {
                                            return (
                                                <div className="d-flex justify-content-start form-check border-bottom p-3" key={index}>
                                                    <input 
                                                        className={
                                                            errors.cancelReason && touched.cancelReason
                                                            ? "form-check-input me-3 is-radio-invalid"
                                                            : "form-check-input me-3"
                                                        } 
                                                        type="radio" 
                                                        name='cancelReason' 
                                                        value={reason.id} 
                                                        id={reason.id}
                                                        onChange={handleChange}
                                                        onClick={()=>{setReason(reason.question)}}
                                                        onBlur={handleBlur}/>
                                                    <label className="form-check-label cancel_label" htmlFor={reason.id}>
                                                        {reason.question}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                        <div className='text-center'>
                                            <Button 
                                                tagType='button'
                                                type='submit'
                                                className="btn btn_outline_black btn_default auth_btn_padding"> 
                                                save                                               
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                    </Modal.Body>
            </Modal>
            <SweetAlert2 {...swalProps} />
        </>
    );
}
export default CancelationReasonModal;