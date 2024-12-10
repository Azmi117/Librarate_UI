import axios from "axios";

const API_URL = 'http://localhost:8080/api/user';

export const getAllUser = async () => {
    try{
        const response = await axios.get(API_URL);
        return response.data;
    }catch(error){
        console.error('Error fetching user:', error);
        throw error;
    }
}

export const getUserByID = async (id, token) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    }catch(error){
        console.error('Error fetching user:', error);
        throw error;
    }
}

export const updateUser = async (data, token) => {
    try{
        const response = await axios.put(`${API_URL}/update`, data, {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
        });
        return response.data;

    }catch(error){
        console.error('Error updating user', error);
    }
}