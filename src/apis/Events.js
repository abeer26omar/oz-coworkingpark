import axios from 'axios';
import FormData from 'form-data';


export const getCommunityNewsFeed = async (viewPosts) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('event', viewPosts);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/community`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const getNewFeedsPost = async (id, source) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('post_id', id);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/community_view`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        cancelToken: source.token
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const getEventsList = async (token, UserId) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', UserId);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/list-events?access_token=${token}&skip=true`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const searchEvents = async (token, UserId, searchText) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', UserId);
    formData.append('search_text', searchText);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/search-events?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const getMyEventsList = async (token, UserId) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', UserId);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/list-my-events?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const attendEvent = async (token, UserId, event_id) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', UserId);
    formData.append('event_id', event_id);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/event-attend?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const likeEvent = async (token, UserId, event_id) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', UserId);
    formData.append('event_id', event_id);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/like-event?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    };

    const response = await axios(config);
        
    return response.data.data;
};