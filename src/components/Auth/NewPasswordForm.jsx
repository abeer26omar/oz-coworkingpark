import { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import { ForgotPasswordChange } from "../../apis/AuthApi";
import { useNavigate } from "react-router-dom";
import Button  from '../UI/Button';
import SweetAlert2 from 'react-sweetalert2';
import Paragraph from '../UI/Paragraph';

const NewPasswordForm = ()=>{

    const [swalProps, setSwalProps] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const email = sessionStorage.getItem("emailuseroz");
        const otp = sessionStorage.getItem("otpuseroz");
        try {
            const result = await ForgotPasswordChange(email, otp, values.password);
            if(result){
                setSwalProps({
                    show: true,
                    icon: 'success',
                    title: 'success',
                    text: 'password changed successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                sessionStorage.removeItem("emailuseroz");
                sessionStorage.removeItem("otpuseroz");
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <>
            <Formik 
                initialValues={
                    { 
                        password: '',
                        confirm_password: ''
                    }
                }
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 0));
                    handleSubmit(values);
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().required('Required'),
                    confirm_password: Yup.string().required('Required')
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                })}>
            {props => {
                const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit
                } = props;
            return (
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="head-content text-center py-4">
                        <Paragraph className="hand-write">Forget Password ,</Paragraph>
                        <Paragraph className="bold-head">Enter New Password</Paragraph>
                    </div>
                     <div className="form__group field mt-3 group-check">
                        <label htmlFor="password" className="form__label">Password</label>
                        <input 
                            id='password'
                            type="password"
                            className={
                                errors.password && touched.password
                                ? "form__field is-invalid"
                                : "form__field"
                            }
                            placeholder="Enter Your Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /> 
                        {errors.password && touched.password && <p className='text-danger mb-0'>{errors.password}</p>}
                    </div>
                    <div className="form__group field mt-3 group-check">
                        <label htmlFor="confirm_password" className="form__label">Confirm Password</label>
                        <input 
                            id='confirm_password'
                            type="password"
                            className={
                                errors.confirm_password && touched.confirm_password
                                ? "form__field is-invalid"
                                : "form__field"
                            }
                            placeholder="Enter confirm password"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /> 
                        {errors.confirm_password && touched.confirm_password && <p className='text-danger mb-0'>{errors.confirm_password}</p>}
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
            <SweetAlert2 {...swalProps} />
        </>
    )
}
export default NewPasswordForm;