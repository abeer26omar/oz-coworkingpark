import React from "react";
import axios from 'axios';
import FormData from 'form-data';

// MembershipTypes API
// export const getListMembershipTypes = async () => {
//     try {
//         const formData = new FormData();
//         formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
//
//         const config = {
//             method: 'post',
//             // url: 'https://modest-banzai.78-141-219-156.plesk.page/api/list_membership_types?access_token=10b8d16368bdf5888ad890c73536ac25e00004c2e742813a131a99c13ae81d6bc257b2a935584948bdc8b08ca966b6626e1f186f03c9a060',
//             url:`${process.env.REACT_APP_API_URL}/api/list_membership_types?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`,
//             data: formData,
//             maxContentLength: Infinity,
//             maxBodyLength: Infinity
//         };
//
//         const response = await axios(config);
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };


export const getListMembershipTypes = async () => {
    try {
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
        if (response.data.status === 'success') {
            return response.data.data;
            console.log(response.data.data)
        } else {
            console.error(response.data.message);
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};


export const getMembershipOptions = async (id) => {
    try {
        const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/list_membership_types?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&id=${id}`,
            data: formData,
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        };

        const response = await axios(config);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};


// List Amenities Group API
export const getlistAmenities = async () => {

    try {
        const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/list_amenities_group?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`,
            data: formData,
        };

        const response = await axios(config);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }

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
