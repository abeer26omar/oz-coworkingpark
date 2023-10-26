import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../UI/Paragraph';
import Button from '../UI/Button';
import OTPInput from "otp-input-react";
import SweetAlert2 from 'react-sweetalert2';
import { ResendOtp, ConfirmOTP } from '../../apis/AuthApi';
import './Auth.css';

const ModalOTP = (props) => {
    const [OTP, setOTP] = useState('');
    const [show, setShow] = useState(props.show);
    const [swalProps, setSwalProps] = useState({});
    const handleClose = () => {setShow(false)};
    
    const Confirm_OTP = async () => {
        try {
            const result = await ConfirmOTP(OTP, props.email);
            window.sessionStorage.setItem("TokenOZ", result.access_token);
            window.sessionStorage.setItem("userIdOZ", result.user_id);
            window.sessionStorage.setItem("activeUserOZ", result.active);
            setShow(false)
            // setSwalProps({
            //     show: true,
            //     title: 'Basic Usage',
            //     text: 'Hello World',
            // });
        } catch (error) {
            setShow(false);
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
    const Resend_Otp = async () => {
        // try {
        //     const result = await ResendOtp(OTP, props.email);
        //     console.log(result);
        //     // window.sessionStorage.setItem("TokenOZ", result.access_token);
        // } catch (error) {
        //     console.log(error);
        // }
    }
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                backdropClassName="custom-backdrop"
                centered>
                    <Modal.Body className={`justify-content-center align-items-center p-5`}>
                        <div className="head-content text-center pb-3">
                            <Paragraph className="hand-write mb-0">Please,</Paragraph>
                            <Paragraph className="bold-head">Enter the OTP</Paragraph>
                        </div>
                        <OTPInput  
                            value={OTP} 
                            onChange={setOTP} 
                            autoFocus 
                            OTPLength={5} 
                            otpType="number"
                            className='otp_container'
                        />
                        <div className="text-center py-4">
                            <Paragraph className='authFooter_copyright auth_desc mb-0'>Don't receive code?
                                <Button className='p-0 otp_resend' tagType='link' onClick={Resend_Otp}>Re-send</Button>
                            </Paragraph>
                        </div>
                        <div className="text-center py-4">
                            <Button    
                                tagType='link'
                                onClick={Confirm_OTP} 
                                className='btn btn_outline_black w-75 py-2'>Login</Button>
                        </div>
                    </Modal.Body>
            </Modal>
            <SweetAlert2 {...swalProps} />
        </>
    )

}
export default ModalOTP;