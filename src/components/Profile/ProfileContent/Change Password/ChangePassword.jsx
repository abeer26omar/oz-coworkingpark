import React, {useState, useEffect, useContext} from 'react';
import {Formik} from 'formik';
import { changePassword } from '../../../../apis/User';
import SweetAlert2 from 'react-sweetalert2';
import * as Yup from "yup";
import { AuthContext } from '../../../../apis/context/AuthTokenContext';

const ChangePassword = () => {

    const [swalProps, setSwalProps] = useState({});
    const { userProfileDate } = useContext(AuthContext)

    const changePasswordInfo = async (values)=>{
        try {
            const result = await changePassword(userProfileDate.email, values.currentPassword, values.newPassword);
            setSwalProps({
                show: true,
                icon: 'success',
                title: result.status,
                text: result.message,
                showConfirmButton: false,
                timer: 1500
            });
            values.currentPassword = ''
            values.newPassword = ''
            values.confirmPassword = ''
        } catch (error) {
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
                initialValues={{
                    email: userProfileDate ? userProfileDate.email : '',
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    changePasswordInfo(values);
                }}
                validationSchema={Yup.object().shape({
                    currentPassword: Yup.string().required('Required'),
                    newPassword: Yup.string().required('Required'),
                    confirmPassword: Yup.string().required('Required')
                    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                })}
            enableReinitialize>
                {props => {
                    const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit
                    } = props
                    return (
                    <section className="changepass-style py-4 px-5">
                        <div className="container">
                            <form className="profile-edit" onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="head-form">
                                            <h2>Change Password</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group field my-3">
                                            <label htmlFor="email" className="form__label">Email</label>
                                            <input 
                                                id='email'
                                                type="email"
                                                className="form__field"
                                                name="email"
                                                value={values.email}
                                                disabled
                                            /> 
                                            {errors.email && touched.email && <p className='text-danger mb-0'>{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group field my-3">
                                            <label htmlFor="currentPassword"
                                                   className="form__label d-flex align-items-center justify-content-start">
                                                Current Password
                                            </label>
                                            <input 
                                                id="currentPassword" 
                                                name="currentPassword" 
                                                type="password"
                                                placeholder="Current Password" 
                                                className={
                                                    errors.phone && touched.phone
                                                    ? "form__field is-invalid"
                                                    : "form__field"
                                                }
                                                value={values.currentPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.currentPassword && touched.currentPassword && <p className='text-danger mb-0'>{errors.currentPassword}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group field my-3">
                                            <label htmlFor="newPassword"
                                                   className="form__label d-flex align-items-center justify-content-start">
                                                New Password
                                            </label>
                                            <input 
                                                id="newPassword" 
                                                name="newPassword" 
                                                type="password"
                                                placeholder="new Password" 
                                                className={
                                                    errors.newPassword && touched.newPassword
                                                    ? "form__field is-invalid"
                                                    : "form__field"
                                                }
                                                value={values.newPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.newPassword && touched.newPassword && <p className='text-danger mb-0'>{errors.newPassword}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group field my-3">
                                            <label htmlFor="confirmPassword"
                                                   className="form__label d-flex align-items-center justify-content-start">
                                                Confirm Password
                                            </label>
                                            <input 
                                                id="confirmPassword" 
                                                name="confirmPassword" 
                                                type="password"
                                                placeholder="confirm Password" 
                                                className={
                                                    errors.confirmPassword && touched.confirmPassword
                                                    ? "form__field is-invalid"
                                                    : "form__field"
                                                }
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.confirmPassword && touched.confirmPassword && <p className='text-danger mb-0'>{errors.confirmPassword}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 text-center">
                                        <button type="submit" className="btn btn_default btn_outline_black ms-3">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                )}}
            </Formik>
            <SweetAlert2 {...swalProps} />
        </>
    );
};

export default ChangePassword;
