import axios from "axios";
import FormData from "form-data";

export const KnowledgeHome = async ( token , signal ) => {
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  
  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_homepage?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };
  

  const response = await axios(config);
  return response.data.data;
}

export const getCategoriesList = async (token, signal) => {
  
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_knowledge_categories?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};

export const getCategoryById = async (token, signal, id) => {
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("id", id);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_knowledge_categories?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};

export const getInstructorsList = async (token, signal, limit, page) => {
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("limit", limit);
  formData.append("page", page);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_knowledge_trainer?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};

export const getInstructorById = async (token, signal, id) => {
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("id", id);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_knowledge_trainer?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};

export const getCoursesList = async (token, signal, search_text, start_date, end_date, price_from, price_to, category_id, seller_type, trainer_id, limit, page) => {
    
    const formData = new FormData();
    formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
    formData.append("limit", limit);
    formData.append("page", page);
    // 
    // formData.append("search_text", search_text);
    // formData.append("start_date", start_date);
    // formData.append("end_date", end_date);
    // formData.append("price_from", price_from);
    // formData.append("price_to", price_to);
    formData.append("category_id", category_id);
    // formData.append("seller_type", seller_type);
    // formData.append("trainer_id", trainer_id);
    
    const config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/zee_knowledge_courses?access_token=${token}&skip=true`,
      data: formData,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      signal: signal
    };
  
    const response = await axios(config);
  
    return response.data.data;
};

export const getCoursesById = async (token, signal, id) => {
  
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("id", id);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_knowledge_courses?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};

export const BookKnowledgeCourse = async (
  token,
  class_id,
  classDate,
  paymentType,
  signal
) => {
  const formData = new FormData();

  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("course_id", class_id);
  formData.append("date", classDate);
  formData.append("payment_type", paymentType);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_knowledge_invoice_confirm?access_token=${token}`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};

export const KnowledgeHistory = async (token , signal) => {
  const formData = new FormData();

  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_knowladge_invoice?access_token=${token}`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};

export const getKnwoldgeByid = async ( token , signal , id ) =>{

  const formData = new FormData();

  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("id" , id);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_knowladge_invoice?access_token=${token}`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };
  
  const response = await axios(config);

  return response.data.data;
}
