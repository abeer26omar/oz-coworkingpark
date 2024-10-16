import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { useState, useContext } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { extendBooking } from '../../../../apis/Booking';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import { TimePicker } from 'antd';

const RemainderModal = (props)=>{

    const { token } = useContext(AuthContext);
    const [value, setValue] = useState(null);

    const onChange = (time) => {
        setValue(time);
    }

    const extend = async () => {
        const res = await extendBooking(token, props.booking_id, )
    }

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                keyboard={false}
                centered
                className='modal-invites'>
                    <Modal.Body className={`justify-content-center align-items-center p-4`}>
                        <Paragraph className="h2-description">Reminder</Paragraph>
                        <div className='d-flex justify-content-center flex-column align-items-center'>
                            <div className='my-4' style={{
                                width: '150px',
                                height: '150px'
                            }}>
                                <CircularProgressbarWithChildren 
                                    value={'90'} 
                                    styles={buildStyles({
                                        pathTransitionDuration: 0.5,
                                        pathColor: `#000`,
                                        trailColor: '#fff',
                                        backgroundColor: '#fff',
                                    })}
                                >
                                    <span className='progress_text'>Booking</span>
                                    <span className='progress_percentage'>90%</span>
                                </CircularProgressbarWithChildren>
                            </div>
                            <Paragraph className='text_reminder'>Reminder: 10 mintes left</Paragraph>
                        </div>
                        <form >
                            <div className="form__group field my-3">
                                <label htmlFor="extendtime"
                                    className="form__label d-flex align-items-center justify-content-start">
                                        Extend time
                                </label>
                                <TimePicker 
                                    value={value} 
                                    onChange={onChange} 
                                    format='HH:mm'
                                    open={true}/>

                                {/* <input 
                                    type="time"
                                    id="extendtime" 
                                    name="extendtime"
                                    className="form__field color-grey"
                                    required
                                    step="60"
                                /> */}
                            </div>
                            <div className="col-12 d-flex justify-content-center py-3">
                                <Button 
                                    type='submit'
                                    tagType='button'
                                    className="btn_outline_black auth_btn_padding w-100"
                                    onClick={extend}>
                                    confirm
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
            </Modal>
        </>
    );
}
export default RemainderModal;