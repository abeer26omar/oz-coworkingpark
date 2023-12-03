import React, { useState, useContext, useEffect } from 'react';
import {Formik} from 'formik';
import * as Yup from "yup";
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
import submit_mark from '../../../../assets/images/submit_mark.svg';
import editProfile from '../../../../assets/images/icons/editprofile.png';
import {ImMinus, ImPlus} from "react-icons/im";
import '../PersonalContent.css';
import { getUserInfo, updateUserInfo, RequestUpdateUserInfo, getInterests, getHobbies } from '../../../../apis/User';
import SweetAlert2 from 'react-sweetalert2';
import { SiteConfigContext } from '../../../../apis/context/SiteConfigContext';
import Select from 'react-select';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import {DisableContext} from '../../../../apis/context/DisableStateContext';
import RequestChangeName from './RequestChangeName';
import RequestChangeEmail from './RequestChangeEmail';
import RequestChangePhone from './RequestChangePhone';

const PersonalData = () => {

    const [userInfo, setUserInfo] = useState({});
    const [custom, setCustom] = useState({});
    const [disabled, setDisabled] = useState(true);
    const [hobbiesList, setHobbiesList] = useState([]);
    const [interestsList, setInterestsList] = useState([]);
    const [reload, setReload] = useState(false);
    const [focus, setFocused] = useState(false);
    const [swalProps, setSwalProps] = useState({});
    const siteConfig = useContext(SiteConfigContext);
    const { token, userId } = useContext(AuthContext);
    const [selectedInterests, setSelectedInterests] = useState(custom ? [custom.fid_12] : [""]);
    const [selectedHobbies, setSelectedHobbies] = useState(custom ? [custom.fid_11] : [""]);
    const { restState, image } = useContext(DisableContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getUserInfo(token, userId, signal).then(res=>{
            setUserInfo(res['user_data']);
            setCustom(res['custom']);
            
        }).catch(err=>{console.log(err)});

        return ()=>controller.abort();
    },[reload]);

    const handleChangeInterests = (data)=>{
        setSelectedInterests(data);
    };
   
    const handleChangeHobbies = (data)=>{
        setSelectedHobbies(data);
    };

    useEffect(()=>{
        getInterests(token).then(res=>{
            const optionList = res.map(item=>{
                return { value: item.id , label: item.title }
            })
            setInterestsList(optionList);
        });
        getHobbies(token).then(res=>{
            const optionList = res.map(item=>{
                return { value: item.id , label: item.title }
            })
            setHobbiesList(optionList);
        });
    },[token]);

    const updateData = async (values) => {
        try {
            const result = await updateUserInfo(values);
            setSwalProps({
                show: true,
                icon: 'success',
                title: result.status,
                text: result.message,
                showConfirmButton: false,
                timer: 1500
            });
            setDisabled(true);
            restState(disabled);
            setReload(true);
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
    };

    return (
        <>
            <Formik 
                initialValues={{
                    avatar: image,
                    gender: userInfo ? userInfo.gender : '',
                    birthday: userInfo ? userInfo.birthday : '',
                    language: userInfo ? userInfo.language : '',
                    nationality: custom ? custom.fid_8 : '',
                    jobTitle: custom ? custom?.fid_5 : '',
                    industry: custom ? custom?.fid_6 : '',
                    city: custom ? custom?.fid_7 : '',
                    companyName: userInfo ? userInfo.working : '',
                    howDidYouKnowUs: custom ? custom?.fid_10 : '',
                    serviceProvide: custom ? custom?.fid_9 : '',
                    about: userInfo ? userInfo.about : '',
                    hobbies: custom ? [custom.fid_11] : [""],
                    interest: custom ? [custom.fid_12] : [""],
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    updateData(values);
                }}
                enableReinitialize>

                {props => {
                    const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    } = props;
                    return (
                        <div className="container py-4 px-5">
                            <form className="profile-edit mb-5" onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="head-form">
                                            <h2>Personal data</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <RequestChangeName prevName={userInfo.name} />
                                    </div>

                                    <div className="col-lg-6">
                                        <RequestChangeEmail prevEmail={userInfo.email} />
                                    </div>

                                    <div className="col-lg-6">
                                        <RequestChangePhone prevPhone={userInfo.phone_number}/>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="gender"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={genderLabel} alt="name" className="me-2"/>}
                                                Gender
                                            </label>
                                            <select
                                                id='gender'
                                                value={values.gender}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={disabled}
                                                className="form__field placeholderSelect">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="birthday"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={birthdayLabel} alt="name" className="me-2"/>}
                                                Birth of date
                                            </label>
                                            <input 
                                                type={focus ? "date" : "text"}
                                                id="birthday" 
                                                name="birthday"
                                                placeholder="Birthday Date"
                                                className="form__field"
                                                value={values.birthday}
                                                onChange={handleChange}
                                                onBlur={() => setFocused(false)}
                                                onFocus={() => setFocused(true)}
                                                disabled={disabled}/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="jobTitle"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                <img src={jobLabel} alt="jobTitle" className="me-2"/>
                                                Job title
                                            </label>
                                            <input 
                                                id="jobTitle" 
                                                name="jobTitle"
                                                placeholder="job Title"
                                                className="form__field"
                                                type='text'
                                                disabled={disabled}
                                                value={values.jobTitle}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="companyName"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={companyLabel} alt="name" className="me-2"/>}
                                                Company Name
                                            </label>
                                            <input 
                                                id="companyName" 
                                                name="companyName"
                                                type='text'
                                                placeholder="Company Name"
                                                className="form__field"
                                                disabled={disabled}
                                                value={values.companyName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="industry"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={industryLabel} alt="name" className="me-2"/>}
                                                Industry
                                            </label>
                                            <select
                                                id="industry" 
                                                name="industry"
                                                value={values.industry}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={disabled}
                                                className="form__field placeholderSelect">
                                                    {siteConfig && Object.entries(siteConfig.profile_dropdown?.fid_6.data).map(([key, value]) => (
                                                        <option key={key} value={key}>
                                                            {value}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="city"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={cityLabel} alt="name" className="me-2"/>}
                                                City
                                            </label>
                                            <select
                                                id="city" 
                                                name="city"
                                                value={values.city}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={disabled}
                                                className="form__field placeholderSelect">
                                                    {siteConfig && Object.entries(siteConfig.profile_dropdown.fid_7.data).map(([key, value]) => (
                                                        <option key={key} value={key}>
                                                            {value}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="nationality"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={nationalityLabel} alt="name" className="me-2"/>}
                                                Nationality
                                            </label>
                                            <select
                                                id="nationality" 
                                                name="nationality"
                                                    value={values.nationality}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    disabled={disabled}
                                                    className="form__field placeholderSelect">
                                                    {siteConfig && Object.entries(siteConfig.profile_dropdown.fid_8.data).map(([key, value]) => (
                                                        <option key={key} value={key}>
                                                            {value}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="language"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={nationalityLabel} alt="nationalityLabel" className="me-2"/>}
                                                Language
                                            </label>
                                            <select
                                                id='language'
                                                value={values.language}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={disabled}
                                                className="form__field placeholderSelect">
                                                    <option value="english">English</option>
                                                    <option value="arabic">Arabic</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form__group field my-3 array-field">
                                            <label
                                                htmlFor="interest"
                                                className="form__label d-flex align-items-center justify-content-start"
                                            >
                                                {disabled && <img src={interestLabel} alt="name" className="me-2"/>}
                                                Interest
                                            </label>
                                            <Select
                                                options={interestsList}
                                                placeholder="Interests"
                                                className="form__field placeholderSelect"
                                                isDisabled={disabled}
                                                defaultValue={selectedInterests}
                                                onChange={handleChangeInterests}
                                                isSearchable={true}
                                                isMulti
                                            />
                                            {/* <FieldArray name="interest">
                                                {({push, remove}) => (
                                                    <div className="d-flex align-items-center flex-wrap ">
                                                        {values.interest.map((singleInterst, index) => (
                                                            <div key={index}
                                                                className="d-flex align-items-center flex-wrap position-relative">
                                                                <input
                                                                    type="text"
                                                                    name={`interest.${index}`}
                                                                    placeholder="Crafting - Design"
                                                                    className="form__field "
                                                                    disabled={disabled}
                                                                    value={singleInterst}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                />
                                                                {(!disabled && index > 0) && <button
                                                                    type="button"
                                                                    onClick={() => {remove(index)}}
                                                                    className="remove-array"
                                                                >
                                                                    <ImMinus/>
                                                                </button>}
                                                            </div>
                                                        ))}

                                                        {!disabled && <button className="add_array" type="button"
                                                                onClick={() => push('')}>
                                                            <ImPlus/>
                                                        </button>}


                                                    </div>
                                                )}
                                            </FieldArray> */}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="howDidYouKnowUs"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={knowLabel} alt="name" className="me-2"/>}
                                                How did you know us ?
                                            </label>
                                            <select
                                                id='howDidYouKnowUs'
                                                name='howDidYouKnowUs'
                                                value={values.howDidYouKnowUs}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={disabled}
                                                className="form__field placeholderSelect">
                                                    {siteConfig && Object.entries(siteConfig.profile_dropdown.fid_10.data).map(([key, value]) => (
                                                        <option key={key} value={key}>
                                                            {value}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="serviceProvide"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={provideLabel} alt="name" className="me-2"/>}
                                                What Service can you Provide ?
                                            </label>
                                            <select
                                                id="serviceProvide" 
                                                name="serviceProvide"
                                                value={values.serviceProvide}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={disabled}
                                                className="form__field placeholderSelect">
                                                    {siteConfig && Object.entries(siteConfig.profile_dropdown.fid_9.data).map(([key, value]) => (
                                                        <option key={key} value={key}>
                                                            {value}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form__group field my-3">
                                            <label htmlFor="about"
                                                className="form__label d-flex align-items-center justify-content-start">
                                                {disabled && <img src={aboutLabel} alt="about" className="me-2"/>}
                                                About Me
                                            </label>
                                            <input 
                                                id="about" 
                                                name="about"
                                                type='text'
                                                disabled={disabled}
                                                placeholder="Tell us More About You"
                                                className="form__field"
                                                value={values.about}
                                                onChange={handleChange}
                                                onBlur={handleBlur}/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form__group field my-3  array-field">
                                            <label
                                                htmlFor="hobbies"
                                                className="form__label d-flex align-items-center justify-content-start"
                                            >
                                                {disabled && <img src={hobbiesLabel} alt="name" className="me-2"/>}
                                                Hobbies
                                            </label>
                                            <Select
                                                options={hobbiesList}
                                                placeholder="Hobbies"
                                                className="form__field placeholderSelect"
                                                isDisabled={disabled}
                                                defaultValue={custom ? [custom.fid_11] : [""]}
                                                onChange={handleChangeHobbies}
                                                isSearchable={true}
                                                isMulti
                                            />
                                            {/* <FieldArray name="hobbies">
                                                {({push, remove}) => (
                                                    <div className="d-flex align-items-center flex-wrap ">
                                                        {values.hobbies.map((singlehobbie, index) => (
                                                            <div key={index}
                                                                className="d-flex align-items-center flex-wrap position-relative">
                                                                <input
                                                                    type="text"
                                                                    name={`hobbies.${index}`}
                                                                    placeholder="hobbies"
                                                                    className="form__field "
                                                                    disabled={disabled}
                                                                    value={singlehobbie}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                />
                                                                {(!disabled && index > 0) && <button
                                                                    type="button"
                                                                    onClick={() => remove(index)}
                                                                    className="remove-array"
                                                                >
                                                                    <ImMinus/>
                                                                </button>}
                                                            </div>
                                                        ))}

                                                        {!disabled && <button className="add_array" type="button"
                                                                onClick={() => push('')}>
                                                            <ImPlus/>
                                                        </button>}


                                                    </div>
                                                )}
                                            </FieldArray> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                            <button 
                                                type="button" 
                                                className="btn btn_outline_black btn_default"
                                                onClick={() => {setDisabled(!disabled); restState(disabled)}}>
                                                {disabled ? (
                                                        <>
                                                            Edit Profile
                                                        </>
                                                    ) : (
                                                        <>
                                                        Cancel
                                                        </>
                                                    )}
                                            </button>
                                        {!disabled && 
                                            <button
                                                type="submit" 
                                                className="btn btn_default btn_outline_black ms-3">
                                                    save
                                            </button>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                )}}
            </Formik>
            <SweetAlert2 {...swalProps} />
        </>
    );
};

export default PersonalData;
