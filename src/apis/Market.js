import axios from 'axios';
import FormData from 'form-data';

export const getServices = async (token, userId, branchId, signal) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', userId);
    formData.append('branch_id', branchId);
    
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/product-categories?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        signal: signal
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const getProductsList = async (token, userId, branchId, catergoreyId,signal) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', userId);
    // formData.append('branch_id', branchId);
    // formData.append('category_id', catergoreyId);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/list-products?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        signal: signal
    };

    const response = await axios(config);
        
    return response.data.data;
};

export const filterProducts = async (token, 
    userId, 
    search_text, 
    service_type_id,
    price_from,
    price_to, 
    branchId,
    signal) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', userId);
    formData.append('search_text', search_text);
    formData.append('branch_id', branchId);
    formData.append('service_type_id', service_type_id);
    formData.append('price_from', price_from);
    formData.append('price_to', price_to);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/product-search?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        signal: signal
    };

    const response = await axios(config);
        
    return response.data.data;
};
