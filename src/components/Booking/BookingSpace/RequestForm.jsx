import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import Button  from '../../UI/Button';
import Paragraph from '../../UI/Paragraph';

const RequestForm = (props)=>{
    const handleSubmit = ()=>{}
    return (
        <>
            <Formik 
                initialValues={
                    { 
                        company_name: '',
                        activities: '',
                        comments: ''
                    }
                }
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 0));
                    handleSubmit(values);
                }}
                validationSchema={Yup.object().shape({
                    company_name: Yup.string().required('Required'),
                    activities: Yup.string().required('Required'),
                    comments: Yup.string().required('Required')
                })}>
            {props => {
                const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset
                } = props;
            return (
                <form className="row" onSubmit={handleSubmit}>
                    <Paragraph className="bold-head mb-3 p-0">Request Booking</Paragraph>
                    <div className="form__group field my-3 group-check">
                        <label htmlFor="company_name" className="form__label">Company Name \ User Name</label>
                        <input 
                            id='company_name'
                            type="text"
                            className={
                                errors.company_name && touched.company_name
                                ? "form__field is-invalid"
                                : "form__field"
                            }
                            placeholder="Enter Your Company Name \ User Name"
                            name="company_name"
                            value={values.company_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /> 
                        {errors.company_name && touched.company_name && <p className='text-danger mb-0'>{errors.company_name}</p>}
                    </div>
                    <div className="form__group field my-3 group-check">
                        <label htmlFor="activities" className="form__label">Activities</label>
                        <select
                            id='activities'
                            value={values.activities}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form__field placeholderSelect">
                                <option selected value=''>Select user activities</option>
                                <option value="company">company</option>
                                <option value="individual">individual</option>
                                <option value="startup">startup</option>
                        </select>
                        {errors.activities && touched.activities && <p className='text-danger mb-0'>{errors.activities}</p>}
                    </div>
                    <div className="form__group field my-3 group-check">
                        <label htmlFor="comments" className="form__label">Comments</label>
                        <input 
                            id='comments'
                            type="text"
                            className={
                                errors.comments && touched.comments
                                ? "form__field is-invalid"
                                : "form__field"
                            }
                            placeholder="Enter Your Comments"
                            name="comments"
                            value={values.comments}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /> 
                        {errors.comments && touched.comments && <p className='text-danger mb-0'>{errors.comments}</p>}
                    </div>
                    
                    <div className="d-flex justify-content-center py-3">
                        <Button 
                            tagType='button'
                            type="submit" 
                            className="btn_outline_black">Request</Button>
                    </div>
                </form>
            )}}
            </Formik>
        </>
    )
}
export default RequestForm;


