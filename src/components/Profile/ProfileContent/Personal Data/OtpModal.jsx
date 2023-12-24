import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import OTPInput from "otp-input-react";
import SweetAlert2 from 'react-sweetalert2';
import '../../../Auth/Auth.css';
import { RequestUpdateUserInfo } from '../../../../apis/User';

const OtpModal = (props) => {

    const [OTP, setOTP] = useState('');
    const [swalProps, setSwalProps] = useState({});
    const [response, setResponse] = useState('');
    const [responseType, setResponseType] = useState();

    const Confirm_OTP = async () => {
        setResponseType();
        setResponse('')
        try {
            const result = await RequestUpdateUserInfo(props.keyInput, props.newValue, props.oldValue, OTP);
                setSwalProps({
                    show: true,
                    icon: 'success',
                    title: result.status,
                    text: result.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            setResponseType(true);
            setResponse('success');
        }catch(error){
            setOTP('')
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
            setResponseType(false);
            setResponse(error.response.data.message);
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
                                <Button className='p-0 otp_resend' tagType='link' onClick={Confirm_OTP}>Re-send</Button>
                            </Paragraph>
                        </div>
                        <Paragraph className={`text-center mb-0 ${responseType ? 'text-success' : 'text-danger'}`}>{response}</Paragraph>
                        <div className="text-center py-4">
                            <Button    
                                tagType='link'
                                onClick={Confirm_OTP} 
                                className='btn btn_outline_black w-75 py-2'>send</Button>
                        </div>
                    </Modal.Body>
            </Modal>
            <SweetAlert2 {...swalProps} />
        </>
    )

}
export default OtpModal;