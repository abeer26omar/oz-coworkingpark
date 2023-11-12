import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const RatingModal = (props)=>{
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                keyboard={false}
                centered
                className='modal-invites'>
                    <Modal.Body className={`justify-content-center align-items-center p-4`}>
                        <Paragraph className="h2-description">Rating</Paragraph>
                        <form >
                            <div>
                                <Paragraph className="h2-description">How was your experience ?</Paragraph>
                                <div className='d-flex justify-content-center'>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={50}
                                        isHalf={true}
                                        value={2.5}
                                        emptyIcon={<i class="fa-solid fa-star"></i>}
                                        halfIcon={<i class="fa-solid fa-star-half"></i>}
                                        fullIcon={<i class="fa-solid fa-star"></i>}
                                        activeColor="#EE9E03"
                                    />
                                </div>
                            </div>
                            <div className="form__group field my-3">
                                <label htmlFor="comment"
                                    className="form__label d-flex align-items-center justify-content-start">
                                        Comment
                                </label>
                                <input 
                                    type='text'
                                    id="comment" 
                                    name="comment"
                                    placeholder='Enter your comment'
                                    className="form__field color-grey"
                                />
                            </div>
                            <div className="col-12 d-flex justify-content-center py-3">
                                <Button 
                                    type='submit'
                                    tagType='button'
                                    className="btn_outline_black auth_btn_padding w-100">
                                    confirm
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
            </Modal>
        </>
    );
}
export default RatingModal;