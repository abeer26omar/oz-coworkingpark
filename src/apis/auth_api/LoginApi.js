import axios from 'axios';

export const Login = async (email, password) => {
    try {
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
    } catch (error) {
        console.error(error);
        throw new Error('Login failed');
    }
};
