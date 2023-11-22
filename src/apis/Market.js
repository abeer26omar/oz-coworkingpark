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
        url: `${process.env.REACT_APP_API_URL}/api/list-products?access_token=${token}&skip=true`,
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

export const createProject = async (token, 
    userId,
    branch_id,
    product_category,
    product_title,
    product_description,
    product_price,
    image,
    portfolio_link,
    contact_type,
    period) => {

    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('user_id', userId);
    formData.append('branch_id', branch_id);
    formData.append('product_category', product_category);
    formData.append('product_title', product_title);
    formData.append('product_description', product_description);
    formData.append('product_price', product_price);
    formData.append('image', image);
    formData.append('portfolio_link', portfolio_link);
    formData.append('contact_type', contact_type);
    formData.append('period', period);

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/oz-create-product?access_token=${token}`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    };

    const response = await axios(config);
        
    return response.data.data;
};
