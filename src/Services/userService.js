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
        console.log(id);
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