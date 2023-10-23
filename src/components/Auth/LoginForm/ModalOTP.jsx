import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../../UI/Paragraph';
import OTPInput, { ResendOTP } from "otp-input-react";

const ModalOTP = (props) => {
    const [OTP, setOTP] = useState("");

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                backdropClassName="custom-backdrop"
                centered>
                    <Modal.Body className={`justify-content-center align-items-center`}>
                        <div className="head-content text-center pb-3">
                            <Paragraph className="hand-write">Please,</Paragraph>
                            <Paragraph className="bold-head">Enter the OTP</Paragraph>
                        </div>
                        <OTPInput  
                            value={OTP} 
                            onChange={setOTP} 
                            autoFocus 
                            OTPLength={4} 
                            otpType="number"
                        />

                    </Modal.Body>
            </Modal>
        </>
    )

}
export default ModalOTP;