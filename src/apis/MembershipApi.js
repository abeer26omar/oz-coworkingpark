import axios from 'axios';
import FormData from 'form-data';

export const getListMembershipTypes = async () => {
        const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/list_membership_types?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`,
            data: formData,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
        };

        const response = await axios(config);
        
        return response.data.data;
};

export const getMembershipOptions = async (id) => {
        const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
        formData.append('id', id);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/get_membership_types?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`,
            data: formData,
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        };

        const response = await axios(config);
        return response.data.data;
};

export const getlistAmenities = async () => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/list_amenities_group?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`,
        data: formData,
    };

    const response = await axios(config);
    return response.data.data;

};
