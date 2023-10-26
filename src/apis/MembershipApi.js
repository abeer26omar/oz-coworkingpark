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


// List Amenities Group API
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

//Inquire API
export const inquiry = async (formState) => {
    try {
        const formDataObj = new FormData();
        formDataObj.append('server_key', process.env.REACT_APP_SERVER_KEY);
        formDataObj.append('first_name', formState.first_name);
        formDataObj.append('last_name', formState.last_name);
        formDataObj.append('email', formState.email);
        formDataObj.append('phone', formState.phone);
        formDataObj.append('user_type', formState.user_type);
        formDataObj.append('inquiry_type', formState.inquiry_type);
        formDataObj.append('location_id', formState.location_id);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/inquiry`,
            data: formDataObj,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
        };

        const response = await axios(config);
        console.log(response.data); // Add this line to log the response data
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to submit inquiry');
    }
    ;

};
