import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../apis/context/AuthTokenContext';
import { Formik } from 'formik';
import * as Yup from "yup";
import { Login } from "../../apis/AuthApi";
import { useNavigate, useLocation } from "react-router-dom";
import Button  from '../UI/Button';
import {requestForToken} from '../../apis/firebase';
import { getMyPlans } from '../../apis/User';
import { Modal } from 'antd';

const LoginForm = ({profile, provider})=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [userInfo, setUSerInfo] = useState({});
    const { handleLogin } = useContext(AuthContext);
    const [notificationToken, setNotificationToken] = useState('');
    const [previousLocation, setPreviousLocation] = useState(sessionStorage.getItem('prevLocationOZ'));
    useEffect(() => {
      setPreviousLocation(sessionStorage.getItem('prevLocationOZ'));
    }, []);
    
    useEffect(()=>{
        if(provider === 'google'){
            setUSerInfo({ 
                email: profile.email,
            });
        }else if(provider === 'facebook'){
            setUSerInfo({ 
                email: profile.email,
            });
        }else{

        }
    },[profile, provider]);

    useEffect(()=>{
        const getToken = async () => {
            try{
                const result = await requestForToken();
                setNotificationToken(result);
            }catch(error){}
        }
        getToken();
    },[]);

    const handleSubmit = async (values) => {
        const controller = new AbortController();
        const signal = controller.signal;
        try {
            const result = await Login(values.email, values.password, provider, notificationToken);
            handleLogin(result);
            const prevRoute = previousLocation === '/newpassword';
            if(result){
                try{
                    const response = await getMyPlans(result.access_token, result.user_id, signal);
                    sessionStorage.setItem('userPlanIdOZ', response['active'][0]?.id);
                }catch(error){}
            }
            if(prevRoute){
                navigate('/');
                sessionStorage.removeItem('prevLocationOZ')
            }else{
                navigate(-1);
            }
        } catch (error) {
            Modal.error({
                title: error.response.data.status,
                content: error.response.data.message,
                footer: false,
                centered: true,
                closable: true,
                maskClosable: true
            });
        }
    };
    
    return (
        <>
            <Formik 
                initialValues={userInfo ||
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
                    email: Yup.string().email().required(),
                    password: Yup.string().required()
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
                    <div className="d-flex align-items-center justify-content-between p-0">
                        <div className="form-check d-flex align-items-center p-0">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-uppercase ps-2" htmlFor="flexCheckDefault">
                                Keep me logged in
                            </label>
                        </div>
                        <Button className='p-0 forgetPassText text-uppercase' tagType='link' to={'/forgetpass'}>Forget your password?</Button>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <Button 
                            tagType='button'
                            type="submit" 
                            className="btn_outline_black auth_btn_padding">Login</Button>
                    </div>
                </form>
            )}}
            </Formik>
        </>
    )
}
export default LoginForm;


