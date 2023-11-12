import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';

const CancelEventModal = (props) => {
    return (
        <>
             <Modal
                show={props.show}
                onHide={props.onHide}
                keyboard={false}
                centered
                className='modal-invites'>
                    <Modal.Body className={`justify-content-center align-items-center text-center p-5`}>
                        <Paragraph className="h2-description">Are you sure for cancel Attending event ?</Paragraph>
                        <div className="row g-3 text-center justify-content-between">
                            <div className='col-6'>
                                <Button 
                                    tagType='link'
                                    className="btn btn_outline_black outline_grey auth_btn_padding btn_default w-100" 
                                    onClick={props.onHide}> 
                                    No                                               
                                </Button>
                            </div>
                            <div className='col-6'>
                                <Button 
                                    tagType='link'
                                    className="btn btn_outline_black btn_default auth_btn_padding w-100"
                                    > 
                                    Yes                                               
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
            </Modal>
        </>
    )
}
export default CancelEventModal;