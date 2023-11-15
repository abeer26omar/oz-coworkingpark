import axios from "axios";



export const config = async(page_name)=>{
    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/config?page=${page_name}`
    };
    const response = await axios(config)
    return response.data.data;
}

export const getBranches = async (token, signal)=>{
    
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);

    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/list_branches?access_token=${token}&skip=true`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        signal: signal
    };

    const response = await axios(config);
    return response.data.data;
};

export const getSiteLocations = async (signal)=>{

    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/locations`,
        signal: signal
    };

    const response = await axios(config);
    return response.data.data;
};

export const getHouseDetails = async (id, signal)=>{

    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/locations/${id}`,
        signal: signal
    };

    const response = await axios(config);
    return response.data.data;
};