import axios from "axios";



export const config = async(page_name)=>{
    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/config?page=${page_name}`
    };
    const response = await axios(config)
    return response.data.data;
}

export const getBranches = async (token)=>{
    
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);

    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/list_branches?access_token=${token}&skip=true`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    };

    const response = await axios(config);
    return response.data.data;
};

export const getBranchById = async (token, id)=>{
    
    const formData = new FormData();
    formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
    formData.append('id', id);

    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/get_branches?access_token=${token}&skip=true`,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
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

export const getIssuesCaseStudies = async (source)=>{

    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/case_types`,
        cancelToken: source.token
    };

    const response = await axios(config);
    return response.data.data;
};

export const getTicketCategories = async (source)=>{

    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/ticket_categories`,
        cancelToken: source.token
    };

    const response = await axios(config);
    return response.data.data;
};

export const getSubCategories = async (source, id)=>{

    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/ticket_categories/${id}/sub_categories`,
        cancelToken: source.token
    };

    const response = await axios(config);
    return response.data.data;
};

export const getVenuesById = async (source, id)=>{

    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/venues/${id}`,
        cancelToken: source.token
    };

    const response = await axios(config);
    return response.data.data;
};

export const createIssue = async (userId, 
    case_type_id,
    ticket_category_id,
    ticket_sub_category_id,
    venue_id,
    branch_id,
    description,
    location,
    amenity_id)=>{

    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/tickets`,
        data: {
            "user_id": userId,
            "case_type_id": case_type_id,
            "ticket_category_id": ticket_category_id, 
            "ticket_sub_category_id": ticket_sub_category_id,
            "venue_id": venue_id,
            "branch_id": branch_id,
            "description": description,
            "location": location,
            "amenity_id": amenity_id
        }
    };

    const response = await axios(config);
    return response.data.data;
};

export const getAmenities = async ()=>{

    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_CONFIG_URL}/api/oz_benefits`,
    };

    const response = await axios(config);
    return response.data.data;
};