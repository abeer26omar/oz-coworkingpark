import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import SweetAlert2 from 'react-sweetalert2';
import {cancelEventAttend } from '../../../../apis/Events';

const CancelEventModal = (props) => {

    const [swalProps, setSwalProps] = useState({});

    const cancel = async () => {
        try{
            const res = await cancelEventAttend(props.token, props.userId, props.event_attend_id);
            setSwalProps({
                show: true,
                icon: 'success',
                title: res.status,
                text: res.message,
                showConfirmButton: false,
                timer: 1500
            });
        }catch (error){
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
                                    onClick={cancel}> 
                                    Yes                                               
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
            </Modal>
            <SweetAlert2 {...swalProps} />
        </>
    )
}
export default CancelEventModal;