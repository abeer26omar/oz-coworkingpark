import './NewsLetter.css';
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from "yup";
import Button from '../UI/Button';
import { useState } from 'react';
import Paragraph from '../UI/Paragraph';
const NewsLetter = () => {
    const [response, setResponse] = useState('')
    const getNewsLetter = async (values)=>{
        try{
            const config = {
                method: 'post',
                url: `${process.env.REACT_APP_API_CONFIG_URL}/api/news_letter/subscribe`,
                data: {
                    "email": values.email
                }
            };
            const response = await axios(config);
            setResponse(response.data.message);
            resetForm(values);
        }catch(error){
            setResponse(error.response.data.message)
        }
    }
    const resetForm = (values)=>{
        values.email = ''
    }
    return (
        <>
            <section className="monoBlock newsLetters">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block">
                                <Paragraph className="white_monoBlock_title">Stay Informed with OZ's Latest Updates</Paragraph>
                            </div>
                            <Formik 
                                initialValues={
                                    { 
                                        email: '',
                                    }
                                }
                                onSubmit={async (values) => {
                                    await new Promise(resolve => setTimeout(resolve, 0));
                                    getNewsLetter(values);
                                    setResponse('')
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().email().required('Required'),
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
                                            <div className="form__group flex-column align-items-center field">
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
                                                {errors.email && touched.email && <p className='text-danger mt-2 mb-0'>{errors.email}</p>}
                                                {response && <p className={`text-white mt-2 mb-0`}>{response}</p>}
                                            </div>
                                            <div className="buttons d-flex justify-content-center align-items-center">
                                                <Button 
                                                    tagType='button' 
                                                    type="submit" 
                                                    className={`button-outLine`}>
                                                    Subscribe</Button>
                                            </div>
                                        </form>
                                    )}}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default NewsLetter;
