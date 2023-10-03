import axios from 'axios';

export const Login = async (email, password) => {
    try {
        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/auth`,
            data: {
                'server_key': process.env.REACT_APP_SERVER_KEY,
                'username': email,
                'password': password,
                'device_type': 'windows'
            }
        };

        const response = await axios(config);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('Login failed');
    }
};
