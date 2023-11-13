import { Formik } from 'formik';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';

const AddPlacesIssueDetails = ()=>{
    const submitIssue = ()=>{};

    return (
        <>
            <div className="container py-4 px-sm-5 px-3">
                <div className="head-form">
                    <h2>Add place & comment</h2>
                </div>
                <div>
                    <Formik
                        initialValues={{
                            code: '',
                            selectedRoom: '',
                            comment: ''
                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            submitIssue(values);
                        }}>
                            {({ 
                                values, 
                                handleChange,
                                handleBlur,
                                handleSubmit }) => (
                                    <form className="profile-edit" onSubmit={handleSubmit}>
                                        <div className="form__group field my-3">
                                            <label htmlFor="code"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                Location
                                            </label>
                                            <div className='input-group'>
                                                <input 
                                                    id="code" 
                                                    placeholder="Enter your code" 
                                                    className="form-control form__field" 
                                                    type='text'
                                                    value={values.code}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className='form__group field my-3'>
                                                <div className='card card_event p-3 mb-3'>
                                                    <div className='row g-3 align-items-center'>
                                                        <div className='col-lg-3 col-12 d-flex align-items-center'>
                                                            <img src={''} alt='event-img' width={'100%'} height={'125px'} style={{
                                                                objectFit:'cover'
                                                            }}/>
                                                        </div>
                                                        <div className='col-lg-7 col-md-8 col-12'>
                                                                <Paragraph className='card-title mb-0'>{'Meeting room 01'}</Paragraph>
                                                        </div>
                                                        <div className='col-lg-2 col-md-4 col-12 d-flex justify-content-end'>
                                                            <input 
                                                                className="form-check-input issue_checkbox" 
                                                                type="checkbox" 
                                                                value={values.selectedRoom}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                id="flexCheckDefault"/>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="form__group field my-3">
                                            <label htmlFor="comment"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                comment
                                            </label>
                                            <div className='input-group'>
                                                <input 
                                                    id="comment" 
                                                    placeholder="Enter your comment" 
                                                    className="form-control form__field" 
                                                    type='text'
                                                    value={values.comment}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center py-3">
                                            <Button 
                                                tagType='button'
                                                type="submit" 
                                                className="btn_outline_black auth_btn_padding">Confirm</Button>
                                        </div>
                                    </form>
                                )}
                    </Formik>
                </div>
            </div>
        </>
    )
};
export default AddPlacesIssueDetails;