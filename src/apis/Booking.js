import axios from 'axios';
import FormData from 'form-data';


export const getAmenitiesGroup = async (token, source) => {
    
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/get-amenitie-groups?access_token=${token}&skip=true`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        cancelToken: source.token
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const getVenues = async (token, UserId, branch_id, amenities_group_id, source) => {
    
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('branch_id', branch_id);
    formData.append('amenities_group_id', amenities_group_id);
    formData.append('user_id', UserId);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/get-venues?access_token=${token}&skip=true`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        cancelToken: source.token
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const getVenueById = async (token, venue_id, source) => {
    
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('id', venue_id);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/get_venue?access_token=${token}&skip=true`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        cancelToken: source.token
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const likeVenues = async (token, UserId, venue_id, source) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('venue_id', venue_id);
    formData.append('user_id', UserId);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/like-venue?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        cancelToken: source.token
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const getLastBooking = async (token, UserId, amenitie_id, source) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('amenitie_group_id', amenitie_id);
    formData.append('user_id', UserId);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/my-booking?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        cancelToken: source.token
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const getMyBookingList = async (token, UserId, source) => {
        
        const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
        formData.append('user_id', UserId);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/list-my-booking?access_token=${token}`,
            data: formData,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            cancelToken: source.token
        };

    const response = await axios(config);
        
    return response.data.data;
};