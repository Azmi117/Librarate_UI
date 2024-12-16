import axios from "axios";

const API_URL = 'http://localhost:8080/api/review';

export const getAllReview = async (id, token) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;

    }catch(error){
        console.log('Error fetching review:', error);
    }
}

export const createReview = async (reviewData, token) => {
    try {
      const response = await axios.post(
        `${API_URL}/create/${reviewData.book_id}`,
        reviewData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to create review:', error);
      throw error;
    }
  };

// Fungsi untuk memperbarui review
export const updateReview = async (reviewId, reviewData, token) => {
  console.log('>>>>>>>>SERVICE', reviewId);
  try {
    const response = await axios.put(
      `${API_URL}/update/${reviewId}`,
      reviewData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to update review:', error);
    throw error;
  }
};

// Fungsi untuk menghapus review
export const deleteReview = async (reviewId, token) => {
  console.log(reviewId);
  try {
    const response = await axios.delete(
      `${API_URL}/delete/${reviewId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to delete review:', error);
    throw error;
  }
};
