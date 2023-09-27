import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import {Link} from "react-router-dom";

const PasswordOtp = ({handleClose}) => {
    const [otp, setOtp] = useState('');
    return (
        <Modal show={true} onHide={handleClose} keyboard={false} className="modal-otp">
            <Modal.Body className="otp-body">
                <h3>Please</h3>
                <h2>Enter the OTP</h2>
                <OtpInput
                    inputType="tel"
                    placeholder="Hello"
                    containerStyle="otp-container justify-content-center"
                    inputStyle="otpbox"
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderInput={(props) => <input {...props} />}
                />
                <span className="d-block text-center">Don’t receive code ?<a href="#">Re-send</a></span>
                <Link to="/login" type="submit" className="button-one-outline btn-bg-white d-block">
                    Login
                </Link>
            </Modal.Body>
        </Modal>
    );
};

const ChangePassword = () => {
    const [showOtp, setShowOtp] = useState(false);

    const handleShowOtp = () => setShowOtp(true);
    const handleCloseOtp = () => setShowOtp(false);

    return (
        <>
            <Formik
                initialValues={{
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    handleShowOtp(); // Show the OTP component after form submission
                }}
            >
                {({values}) => (
                    <section className="changepass-style">
                        <div className="container">
                            <Form className="profile-edit">
                                {/* Form fields */}
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="head-form">
                                            <h2>Change Password</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group field my-3">
                                            <label htmlFor="currentPassword"
                                                   className="form__label d-flex align-items-center justify-content-start">
                                                Current Password
                                            </label>
                                            <Field id="currentPassword" name="currentPassword" type="password"
                                                   placeholder="Current Password" className="form__field" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group field my-3">
                                            <label htmlFor="newPassword"
                                                   className="form__label d-flex align-items-center justify-content-start">
                                                New Password
                                            </label>
                                            <Field id="newPassword" name="newPassword" type="password"
                                                   placeholder="New Password" className="form__field" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form__group field my-3">
                                            <label htmlFor="confirmPassword"
                                                   className="form__label d-flex align-items-center justify-content-start">
                                                Confirm Password
                                            </label>
                                            <Field id="confirmPassword" name="confirmPassword" type="password"
                                                   placeholder="Confirm Password" className="form__field" required/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 text-center">
                                        <button type="submit" className="button-one-outline btn-bg-white">
                                            Confirm
                                            {showOtp && <PasswordOtp handleClose={handleCloseOtp}/>}
                                        </button>
                                    </div>
                                </div>

                            </Form>
                        </div>
                    </section>
                )}
            </Formik>

            {/* Render the OTP component when showOtp state is true */}
            {showOtp && <PasswordOtp handleClose={handleCloseOtp}/>}
        </>
    );
};

export default ChangePassword;
