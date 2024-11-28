import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (params) => {
    try{
        const response = await axios.post(`${API_URL}/login`, params);
        return response.data; 
    }catch(error){
        console.error('Failed fetch login API: ', error);
        throw error.response?.data?.message || 'Login failed';
    }
}

export const register = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Failed fetch register API: ", error);
      throw error.response?.data?.message || "Register failed";
    }
  };
  