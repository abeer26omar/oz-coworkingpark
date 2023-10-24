import { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import { Register } from "../../apis/auth_api/LoginApi";
import { useNavigate } from "react-router-dom";
import Button  from '../UI/Button';
import ModalOTP from './ModalOTP';
import SweetAlert2 from 'react-sweetalert2';

const RegisterForm = ()=>{
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');

    const handleClose = () => setShow(false);
    const [swalProps, setSwalProps] = useState({});

    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            const result = await Register(values.first_name, 
                values.last_name, 
                values.email, 
                values.phone, 
                values.user_type, 
                values.password,
                values.confirm_password);
            setShow(true);
            setEmail(values.email);
            console.log(result);
        } catch (error) {
            console.log(error.response.data);
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
                        first_name: '',
                        last_name: '',
                        email: '',
                        phone: '',
                        user_type: '',
                        password: '',
                        confirm_password: ''
                    }
                }
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 0));
                    handleSubmit(values);
                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string().required('Required'),
                    last_name: Yup.string().required('Required'),
                    email: Yup.string().email().required('Required'),
                    phone: Yup.string().required('Required'),
                    user_type: Yup.string().required('Required'),
                    password: Yup.string().required('Required'),
                    confirm_password: Yup.string().required('Required')
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
                    <div className='col-lg-6'>
                        <div className="form__group field my-3 group-check">
                            <label htmlFor="first_name" className="form__label">First Name</label>
                            <input 
                                id='first_name'
                                type="text"
                                className={
                                    errors.first_name && touched.first_name
                                    ? "form__field is-invalid"
                                    : "form__field"
                                }
                                placeholder="Enter Your first Name"
                                name="first_name"
                                value={values.first_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            /> 
                            {errors.first_name && touched.first_name && <p className='text-danger mb-0'>{errors.first_name}</p>}
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="form__group field my-3 group-check">
                            <label htmlFor="last_name" className="form__label">Last Name</label>
                            <input 
                                id='last_name'
                                type="text"
                                className={
                                    errors.last_name && touched.last_name
                                    ? "form__field is-invalid"
                                    : "form__field"
                                }
                                placeholder="Enter Your last Name"
                                name="last_name"
                                value={values.last_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            /> 
                            {errors.last_name && touched.last_name && <p className='text-danger mb-0'>{errors.last_name}</p>}
                        </div>
                    </div>
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
                    <div className="form__group field my-3 group-check">
                        <label htmlFor="phone" className="form__label">Phone number</label>
                        <input 
                            type="text"
                            className={"form__field me-3 px-lg-0 country_code"}
                            placeholder="+20"
                            disabled
                        />  
                        <input 
                            id='phone'
                            type="number"
                            className={
                                errors.phone && touched.phone
                                ? "form__field phone_field is-invalid"
                                : "form__field phone_field"
                            }
                            placeholder="Phone No."
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.phone && touched.phone && <p className='text-danger mb-0'>{errors.phone}</p>}
                    </div>
                    <div className="form__group field my-3 group-check">
                        <label htmlFor="user_type" className="form__label">User Type</label>
                        <select
                            id='user_type'
                            value={values.user_type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form__field placeholderSelect">
                                <option selected value=''>Enter user type</option>
                                <option value="company">company</option>
                                <option value="individual">individual</option>
                                <option value="startup">startup</option>
                        </select>
                        {errors.user_type && touched.user_type && <p className='text-danger mb-0'>{errors.user_type}</p>}
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
                            placeholder="Enter Your Email"
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
                            className="btn_outline_black auth_btn_padding">Register</Button>
                    </div>
                </form>
            )}}
            </Formik>
            <ModalOTP 
                show={show}
                onHide={handleClose}
                email={email}/>
            <SweetAlert2 {...swalProps} />
        </>
    )
}
export default RegisterForm;