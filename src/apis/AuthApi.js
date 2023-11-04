import axios from 'axios';
import { redirect } from 'react-router-dom';

export const Register = async (first_name,last_name,email,phone,user_type,password,confirm_password) => {
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY)
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('fid_4', user_type);
    formData.append('password', password);
    formData.append('confirm_password', confirm_password);
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/create-account`,
        data: formData
    };
    const response = await axios(config);
    return response.data.data;
};

export const ConfirmOTP = async (code, email, mode)=>{
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY)
    formData.append('code', code);
    formData.append('phone', email);
    formData.append('mode', mode);
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/otp`,
        data: formData
    };
    const response = await axios(config);
    return response.data.data;
};

export const ResendOtp = async (email)=>{
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY)
    formData.append('phone_or_email', email);
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/send-reset-password-otp`,
        data: formData
    };
    const response = await axios(config);
    return response.data.data;
};

export const Login = async (email, password) => {
    const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY)
        formData.append('username', email);
        formData.append('password', password);
        formData.append('device_type', 'windows');
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/auth`,
        data: formData
    };
    const response = await axios(config);
    return response.data.data;
};

export const ForgetPass = async (email)=>{
    const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY)
        formData.append('email', email);
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/send-reset-password-email`,
        data: formData
    };
    const response = await axios(config);
    return response.data.data;
};

export const ResetPasswordOtp = async (email)=>{
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY)
    formData.append('phone_or_email', email);
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/send-reset-password-otp`,
        data: formData
    };
    const response = await axios(config);
    return response.data.data;
};

export const ForgotPasswordChange = async (email, otp, password)=>{
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY)
    formData.append('phone_or_email', email);
    formData.append('forgot_code', otp);
    formData.append('new_password', password);
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/forgot_password_change`,
        data: formData
    };
    const response = await axios(config);
    return response.data.data;
};

export const getAuthToken = () => {
    const TokenOZ = sessionStorage.getItem("TokenOZ");
    return TokenOZ;
};

export const TokenLoader = ()=>{
    const token = getAuthToken();
    
    if(token){
        return token;
    }
    return null;
};

export function checkAuthLoader() {
    const token = getAuthToken();
    
    if (!token) {
      return redirect('/login');
    }
   
    return null;
};

export const handleFaceBookLogin = ()=>{

};

export const handleSocialLoginFailure = ()=>{};