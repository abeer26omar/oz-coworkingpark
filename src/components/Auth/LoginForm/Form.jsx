import { Formik } from 'formik';
import * as Yup from "yup";
import {Login} from "../../../apis/auth_api/LoginApi";
import {useNavigate} from "react-router-dom";



const Form = (props)=>{
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            const result = await Login(values.email, values.password);
            console.log(result);
            window.sessionStorage.setItem("TokenOZ", result.access_token);
            navigate('/membership');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Formik 
                initialValues={
                    { 
                        email: '',
                        password: ''
                    }
                }
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 0));
                    handleSubmit(values);
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required('Required'),
                    password: Yup.string().required('Required')
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
                    <div className="form__group field my-3 group-check">
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
                    <div className="d-flex justify-content-center py-3">
                        <button type="submit" className="button-one-outline btn-bg-white ">Login</button>
                    </div>
                </form>
            )}}
            </Formik>
        </>
    )
}
export default Form;


