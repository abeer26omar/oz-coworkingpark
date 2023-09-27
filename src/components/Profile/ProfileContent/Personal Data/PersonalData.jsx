import React from 'react';
import {Field, FieldArray, Form, Formik,} from 'formik';
import nameLabel from '../../../../assets/images/icons/User Id.png';
import emailLabel from '../../../../assets/images/icons/Mail.png';
import mobileLabel from '../../../../assets/images/icons/Smartphone 2.png';
import genderLabel from '../../../../assets/images/icons/Male.png';
import birthdayLabel from '../../../../assets/images/icons/Calendar Mark.png';
import jobLabel from '../../../../assets/images/icons/Case.png';
import industryLabel from '../../../../assets/images/icons/Layers Minimalistic.png';
import companyLabel from '../../../../assets/images/icons/Buildings.png';
import cityLabel from '../../../../assets/images/icons/Streets Map Point.png';
import nationalityLabel from '../../../../assets/images/icons/Global.png';
import interestLabel from '../../../../assets/images/icons/interest.png';
import knowLabel from '../../../../assets/images/icons/Group 37057.png';
import provideLabel from '../../../../assets/images/icons/Hand Stars.png';
import aboutLabel from '../../../../assets/images/icons/Document Add.png';
import hobbiesLabel from '../../../../assets/images/icons/Widget 4.png';
import editProfile from '../../../../assets/images/icons/editprofile.png';
import {ImMinus, ImPlus} from "react-icons/im";
import '../PersonalContent.css'
import Media from "../../../Media/Media";

const PersonalData = () => {

    return (
        <>
            <Formik initialValues={{
                name: '',
                emailAddress: '',
                mobileNumber: '',
                gender: '',
                birthdayDate: '',
                jobTitle: '',
                industry: '',
                city: '',
                companyName: '',
                nationality: '',
                howDidYouKnowUs: '',
                serviceProvide: '',
                aboutMe: '',
                hobbies: [""],
                interest: [""],
            }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}

            >

                {({values}) => (
                    <div className="container">
                        <Form className="profile-edit">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="head-form">
                                        <h2>Personal data</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="name"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media
                                                type="img" src={nameLabel} alt="name" className="me-2"/>
                                            First Name
                                        </label>
                                        <Field id="name" name="name" placeholder="name" className="form__field"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="emailAddress"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={emailLabel} alt="name" className="me-2"/>
                                            E-Mail Address
                                        </label>
                                        <Field id="emailAddress" name="emailAddress" placeholder="Email Address"
                                               className="form__field"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="mobileNumber"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={mobileLabel} alt="name" className="me-2"/>
                                            Mobile Number
                                        </label>
                                        <Field id="mobileNumber" name="mobileNumber" placeholder="Mobile Number "
                                               className="form__field"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="gender"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={genderLabel} alt="name" className="me-2"/>
                                            Gender
                                        </label>
                                        <Field as="select" name="gender" className="form__field placeholderSelect">

                                            <option value="male">Male</option>

                                            <option value="female">Female</option>

                                            <option value="other">Other</option>

                                        </Field>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="mobileNumber"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={birthdayLabel} alt="name" className="me-2"/>
                                            Birth of date
                                        </label>
                                        <Field type="date" id="birthdayDate" name="birthdayDate"
                                               placeholder="Birthday Date "
                                               className="form__field"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="mobileNumber"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={jobLabel} alt="name" className="me-2"/>
                                            Job title
                                        </label>
                                        <Field id="jobTitle" name="jobTitle"
                                               placeholder="jobTitle"
                                               className="form__field"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="industry"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={industryLabel} alt="name" className="me-2"/>
                                            Industry
                                        </label>
                                        <Field id="industry" name="industry"
                                               placeholder="industry"
                                               className="form__field"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="companyName"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={companyLabel} alt="name" className="me-2"/>
                                            Company Name
                                        </label>
                                        <Field id="companyName" name="companyName"
                                               placeholder="Company Name"
                                               className="form__field"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="city"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={cityLabel} alt="name" className="me-2"/>
                                            City
                                        </label>
                                        <Field id="city" name="city"
                                               placeholder="City"
                                               className="form__field"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="nationality"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={nationalityLabel} alt="name" className="me-2"/>
                                            Nationality
                                        </label>
                                        <Field id="nationality" name="nationality"
                                               placeholder="nationality"
                                               className="form__field"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3 array-field">
                                        <label
                                            htmlFor="interest"
                                            className="form__label d-flex align-items-center justify-content-start"
                                        >
                                            <Media type="img" src={interestLabel} alt="name" className="me-2"/>
                                            Interest
                                        </label>
                                        <FieldArray name="interest">
                                            {({push, remove}) => (
                                                <div className="d-flex align-items-center flex-wrap ">
                                                    {values.interest.map((singleInterst, index) => (
                                                        <div key={index}
                                                             className="d-flex align-items-center flex-wrap position-relative">
                                                            <Field
                                                                type="text"
                                                                name={`interest.${index}`}
                                                                placeholder="Interstates"
                                                                className="form__field "
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(index)}
                                                                className="remove-array"
                                                            >
                                                                <ImMinus/>
                                                            </button>
                                                        </div>
                                                    ))}

                                                    <button className="add_array" type="button"
                                                            onClick={() => push('')}>
                                                        <ImPlus/>
                                                    </button>


                                                </div>
                                            )}
                                        </FieldArray>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="howDidYouKnowUs"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={knowLabel} alt="name" className="me-2"/>
                                            How did you know us ?
                                        </label>
                                        <Field as="select" name="howDidYouKnowUs"
                                               className="form__field placeholderSelect">

                                            <option value="facebook">Facebook</option>

                                            <option value="twitter">Twitter</option>

                                            <option value="instagram">Instagram</option>

                                        </Field>
                                    </div>
                                </div>


                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="serviceProvide"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={provideLabel} alt="name" className="me-2"/>
                                            What Service can you Provide ?
                                        </label>
                                        <Field id="serviceProvide" name="serviceProvide"
                                               placeholder="serviceProvide"
                                               className="form__field"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3">
                                        <label htmlFor="serviceProvide"
                                               className="form__label d-flex align-items-center justify-content-start">
                                            <Media type="img" src={aboutLabel} alt="name" className="me-2"/>
                                            About Me
                                        </label>
                                        <Field id="serviceProvide" name="serviceProvide"
                                               placeholder="serviceProvide"
                                               className="form__field"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form__group field my-3  array-field">
                                        <label
                                            htmlFor="hobbies"
                                            className="form__label d-flex align-items-center justify-content-start"
                                        >
                                            <Media type="img" src={hobbiesLabel} alt="name" className="me-2"/>
                                            Hobbies
                                        </label>
                                        <FieldArray name="hobbies">
                                            {({push, remove}) => (
                                                <div className="d-flex align-items-center flex-wrap ">
                                                    {values.hobbies.map((singlehobbie, index) => (
                                                        <div key={index}
                                                             className="d-flex align-items-center flex-wrap position-relative">
                                                            <Field
                                                                type="text"
                                                                name={`hobbies.${index}`}
                                                                placeholder="Interstates"
                                                                className="form__field "
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(index)}
                                                                className="remove-array"
                                                            >
                                                                <ImMinus/>
                                                            </button>
                                                        </div>
                                                    ))}

                                                    <button className="add_array" type="button"
                                                            onClick={() => push('')}>
                                                        <ImPlus/>
                                                    </button>


                                                </div>
                                            )}
                                        </FieldArray>
                                    </div>
                                </div>

                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="button-one-outline btn-bg-white">Edit Profile
                                        <Media type="img" src={editProfile}/>
                                    </button>
                                </div>

                            </div>
                        </Form>

                    </div>
                )}


            </Formik>

        </>
    );
};

export default PersonalData;
