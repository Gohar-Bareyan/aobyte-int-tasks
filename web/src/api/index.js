import axios from 'axios';
import humps from 'humps';

const axiosInstance = axios.create();

// Camelizing all keys from responses
axiosInstance.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status <= 400) {
      return {
        ...response,
        data: humps.camelizeKeys(response.data),
      };
    }
    return response;
  }
);

const API_ENDPOINT = 'http://localhost:5005';

export const getPosts = async () => {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINT}/get-posts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addPostComment = async ({ postId, comment, sender }) => {
  try {
    const response = await axiosInstance.post(`${API_ENDPOINT}/add-post-comment`, { postId, comment, sender });
    return response.data;
  } catch (error) {
    console.error("Error sending comment:", error);
  };
};

export const deletePostComment = async (commentId) => {
  try {
    await axiosInstance.delete(`${API_ENDPOINT}/delete-post-comment/${commentId}`)
  } catch (error) {
    console.error("Error deleting comment:", error);
  };
};
