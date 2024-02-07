import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Paragraph from  '../UI/Paragraph';
import Button from '../UI/Button';
import OTPInput from "otp-input-react";
import { ResendOtp, ConfirmOTP } from '../../apis/AuthApi';
import { AuthContext } from '../../apis/context/AuthTokenContext';
import './Auth.css';
import { Modal as modal } from 'antd';

const RegisterOTPModal = (props) => {

    const [OTP, setOTP] = useState('');
    const navigate = useNavigate();
    const { handelRegister } = useContext(AuthContext);

    const Confirm_OTP = async () => {
        try {
            const result = await ConfirmOTP(OTP, props.email,'create_account');
            handelRegister(result, props.userData);
            navigate(-1);
        } catch (error) {
            modal.error({
                title: error.response.data.status,
                content: error.response.data.message,
                footer: false,
                centered: true,
                closable: true,
                maskClosable: true
            });
        }
    }
    const Resend_Otp = async () => {
        try{
            const result = await ResendOtp(props.email);
            modal.success({
                title: 'success',
                content: 'OTP send successfully',
                footer: false,
                centered: true,
                closable: true,
                maskClosable: true
            });
        } catch (error) {
            modal.error({
                title: error.response.data.status,
                content: error.response.data.message,
                footer: false,
                centered: true,
                closable: true,
                maskClosable: true
            });
        }
    }
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                backdrop="static"
                keyboard={false}
                backdropClassName="custom-backdrop"
                centered>
                <Modal.Header closeButton style={{
                    border: 'none'
                }}></Modal.Header>
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
        </>
    )

}
export default RegisterOTPModal;