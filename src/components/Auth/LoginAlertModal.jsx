import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Paragraph from  '../UI/Paragraph';
import Button from '../UI/Button';

import './Auth.css';

const LoginAlert = (props) => {
    
    const navigate = useNavigate();

    
    
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                keyboard={false}
                backdropClassName="custom-backdrop"
                centered>
                    <Modal.Body className={`justify-content-center align-items-center p-4`}>
                        <div className="text-center">
                            <Paragraph>please, login first</Paragraph>
                            <Button    
                                tagType='link'
                                to={'/login'}
                                className='btn btn_outline_black w-75 py-2'>Login</Button>
                        </div>
                    </Modal.Body>
            </Modal>
        </>
    )

}
export default LoginAlert;