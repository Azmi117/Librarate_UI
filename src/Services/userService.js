import axios from "axios";

const API_URL = 'https://apilibrarate-production.up.railway.app/api/user';

export const getAllUser = async (params, token) => {
    try{
        const response = await axios.get(API_URL, {
            params,
            headers:{
                Authorization: `Bearer ${token}`
            },
        });
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