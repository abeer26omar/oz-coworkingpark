import axios from 'axios';

export const Login = async (username, password) => {
    try {
        const formData = new FormData();
        // formData.append('server_key', 'c04919f13f43b612fff3b76c5d08b2d6')
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY)
        formData.append('username', username);
        formData.append('password', password);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/auth`,
            data: formData,
        };

        const response = await axios(config);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('Login failed');
    }
};
