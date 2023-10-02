import React from "react";
import axios from "axios";
import { useEffect } from 'react';



export const config = async(page_name)=>{
    // useEffect(()=>{})
    try{
        const config = {
            method: 'get',
            url: `https://dashboard.ozcoworkingpark.com/api/config?page=${page_name}`
        };
       const response = await axios(config)
            // console.log(response.data.data)
            return response.data.data;
    
    }catch(error){
        console.error(error);
    }

   

}
