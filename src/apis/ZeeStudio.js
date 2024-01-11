import axios from "axios";
import FormData from "form-data";

export const getTrainingClasses = async (token, signal) => {
    
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_training?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal
  };

  const response = await axios(config);

  return response.data.data;
};

export const getClassById = async (token, signal , id)  => {
  const formData = new FormData();
  formData.append("server_key", process.env.REACT_APP_SERVER_KEY);
  formData.append("id" ,id);

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/api/zee_training?access_token=${token}&skip=true`,
    data: formData,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    signal: signal,
  };

  const response = await axios(config);

  return response.data.data;
};