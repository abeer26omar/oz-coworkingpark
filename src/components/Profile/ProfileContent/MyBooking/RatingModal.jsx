import {Formik} from 'formik';
import * as Yup from "yup";
import { useState, useContext } from 'react';
import ReactStars from "react-rating-stars-component";
import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { rateBooking } from '../../../../apis/Booking';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import SweetAlert2 from 'react-sweetalert2';

const RatingModal = (props)=>{

    const [rating, setRate] = useState();
    const [swalProps, setSwalProps] = useState({});
    const {token, userId} = useContext(AuthContext);

    const ratingChanged = (newRating) => {
        setRate(newRating);
    };
    const rate = async (values) => {
        try{
            const result = await rateBooking(token, userId, props.booking_id, props.venueId, rating, values.message);
            setSwalProps({
                show: true,
                icon: 'success',
                title: result.status,
                text: result.message,
                showConfirmButton: false,
                timer: 1500
            });
        }catch(error){
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
                    <Modal.Body className={`justify-content-center align-items-center p-4`}>
                        <Paragraph className="h2-description">Rating</Paragraph>
                        <Formik
                            initialValues={{
                                rating: rating,
                                message: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                rate(values)
                            }}
                            validationSchema={
                                Yup.object().shape({
                                    rating: Yup.string().required(),
                                })
                            }
                            enableReinitialize>
                                {({ 
                                    values, 
                                    touched,
                                    errors,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
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
                                                {errors.rating && touched.rating && <p className='text-danger mb-0'>{errors.rating}</p>}
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
                                                value={values.message}
                                                placeholder='Enter your comment'
                                                className="form__field color-grey"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
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
                                )}
                            </Formik>
                    </Modal.Body>
            </Modal>
            <SweetAlert2 {...swalProps} />
        </>
    );
}
export default RatingModal;