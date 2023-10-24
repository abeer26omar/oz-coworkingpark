import { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import { ForgetPass } from "../../apis/auth_api/LoginApi";
import { useNavigate } from "react-router-dom";
import Button  from '../UI/Button';
import ModalOTP from './ModalOTP';

const ForgetPassForm = (props)=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            const result = await ForgetPass(values.email);
            console.log(result);
            setShow(true);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Formik 
                initialValues={
                    { 
                        email: ''
                    }
                }
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 0));
                    handleSubmit(values);
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required('Required'),
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
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="form__group field my-3 group-check">
                        <label htmlFor="email" className="form__label">Email</label>
                        <input 
                            id='email'
                            type="email"
                            className={
                                errors.email && touched.email
                                ? "form__field is-invalid"
                                : "form__field"
                            }
                            placeholder="Enter Your Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /> 
                        {errors.email && touched.email && <p className='text-danger mb-0'>{errors.email}</p>}
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <Button 
                            tagType='button'
                            type="submit" 
                            className="btn_outline_black auth_btn_padding">Submit</Button>
                    </div>
                </form>
            )}}
            </Formik>
            <Button className='p-0 signup_title' tagType='link' onClick={handleShow}>open otp</Button>
            <ModalOTP 
                show={show}
                onHide={handleClose}/>
        </>
    )
}
export default ForgetPassForm;


