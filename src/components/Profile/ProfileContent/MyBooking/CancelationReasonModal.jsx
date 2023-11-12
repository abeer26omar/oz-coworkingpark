import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';

const CancelationReasonModal = (props) => {
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
                            <div className="form-check border-bottom py-3">
                                <input className="form-check-input" type="checkbox" value="" id="cancel1"/>
                                <label className="form-check-label cancel_label" htmlFor="cancel1">
                                    I canceled this reservation due to a change in my appointments
                                </label>
                            </div>
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