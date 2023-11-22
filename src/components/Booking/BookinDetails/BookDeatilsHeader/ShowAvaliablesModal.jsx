import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
const ShowAvaliablesModal = (props) => {
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
                                {console.log(props.avaliableDate)}
                            </div>
                        </Modal.Body>
            </Modal>
        </>
    )
};
export default ShowAvaliablesModal;