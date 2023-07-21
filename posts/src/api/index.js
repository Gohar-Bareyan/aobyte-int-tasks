import axios from 'axios';

const API_ENDPOINT = 'http://localhost:5005';

export const fetchPostsDataFromBackend = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/get-posts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addPostComment = ({ postId, comment, sender }) => {
  axios
    .post(`${API_ENDPOINT}/add-post-comment`, { postId, comment, sender })
    .then((response) => {
      console.log("Comment sent successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error sending comment:", error);
    });
};

export const deletePostComment = (commentId) => {
  axios
    .delete(`${API_ENDPOINT}/delete-post-comment/${commentId}`)
    .then((response) => {
      console.log("Comment was successfully deleted:", response.data);
    })
    .catch((error) => {
      console.error("Error deleting comment:", error);
    });
};
