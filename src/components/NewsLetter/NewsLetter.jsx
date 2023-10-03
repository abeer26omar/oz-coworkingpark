import './NewsLetter.css';
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from "yup";
import Buttons from '../Buttons/Buttons';
const NewsLetter = () => {
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
            console.log(response.data.message);
        }catch(error){
            console.error(error);
        }
    }
    return (
        <>
            <section className="monoBlock newsLetters">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block">
                                <h1 className="text-h1">Join NewsLetter</h1>
                            </div>
                            <Formik 
                                initialValues={
                                    { 
                                        email: '',
                                    }
                                }
                                onSubmit={async values => {
                                    await new Promise(resolve => setTimeout(resolve, 0));
                                    getNewsLetter(values);
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().email().required('Required'),
                                })}>
                                    {props => {
                                        const {
                                        values,
                                        touched,
                                        errors,
                                        isSubmitting,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        handleReset
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
                                            </div>
                                            <div className="buttons d-flex justify-content-center align-items-center">
                                                <Buttons tagType='button' type="submit" className="button-one-outline btn-bg-white">Subscribe</Buttons>
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
