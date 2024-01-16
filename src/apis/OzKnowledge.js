import axios from "axios";
import FormData from "form-data";

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

export const getCoursesList = async (token, signal, limit, page) => {
    
    const formData = new FormData();
    formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
    formData.append("limit", limit);
    formData.append("page", page);
  
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
//

export const getWorkingScheduleList = async (token, date, signal) => {
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("date", date);
  formData.append("web", true);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_working_schedule?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};

export const BookGymClass = async (
  token,
  class_id,
  classDate,
  paymentType,
  signal
) => {
  const formData = new FormData();

  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("training_id", class_id);
  formData.append("date", classDate);
  formData.append("payment_type", paymentType);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_invoice_confirm?access_token=${token}`,
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
