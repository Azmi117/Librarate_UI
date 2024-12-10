import axios from "axios";

const API_URL = 'http://localhost:8080/api/book';


export const getAllBooks = async (params) => {
    try{
        const response = await axios.get(API_URL, { params });
        return response.data;
    }catch(error){
        console.error('Error fetching books:', error);
        throw error;
    }
}

export const getBookById = async (id) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    }catch(error){
        console.error('Error fetching book by ID:', error);
        throw error;
    }
}

export const createBook = async (bookData, token) => {
    try{
        const response = await axios.post(`${API_URL}/create`, bookData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
        });
        return response.data;
    }catch(error){
        console.error('Error create book:', error);
    }
}

export const updateBook = async (id, bookData, token) => {
    try{
        const response = await axios.put(`${API_URL}/update/${id}`, bookData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }catch(error){
        console.error('Error update book:', error);
    }
};

export const deleteBook = async (bookid, token) => {
    try{
        const response = await axios.delete(`${API_URL}/delete/${bookid}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        console.error('Error delete book:', error);
    }
}