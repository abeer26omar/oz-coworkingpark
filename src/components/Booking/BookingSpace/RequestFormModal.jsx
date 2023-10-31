import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RequestForm from './RequestForm';

const RequestFormModal = (props) => {

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                centered
                backdropClassName="custom-backdrop">
                    <Modal.Body className={`justify-content-center align-items-center p-5`}>
                        <RequestForm />
                    </Modal.Body>
            </Modal>
            
        </>
    )

}
export default RequestFormModal;