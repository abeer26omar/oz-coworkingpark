import axios from 'axios';
import FormData from 'form-data';

export const getUserInfo = async () => {
        const token = sessionStorage.getItem('TokenOZ');
        const UserId = sessionStorage.getItem('userIdOZ');
        const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
        formData.append('fetch', 'user_data');
        formData.append('user_id', UserId);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/get-user-data?access_token=${token}`,
            data: formData,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
        };

    const response = await axios(config);
        
    return response.data.data;
};
