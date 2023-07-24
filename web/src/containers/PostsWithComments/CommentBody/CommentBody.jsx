import { useContext, useState } from "react";

import CommentBody from "../../../components/PostsWithComments/AccordionDetails/CommentBody";

import {
  addPostCommentReply,
  deletePostComment,
  ratePostComment,
} from "../../../api";
import { DataContext } from "../../../store/dataContext";

const CommentBodyContainer = (props) => {
  const {
    post,
    posts,
    isReplyClicked,
    replyCommentId,
    handleReplyButtonClick,
  } = props;

  const { dispatch } = useContext(DataContext);

  const [commentReply, setCommentReply] = useState("");

  const handleCommentReplyChange = (event) => {
    setCommentReply(event.target.value);
  };

  const handleSendCommentReply = async (
    event,
    commentId,
    isClicked = false
  ) => {
    if (event.key === "Enter" || isClicked) {
      event.preventDefault();

      try {
        await addPostCommentReply({
          commentId,
          commentReply,
        });

        setCommentReply("");
      } catch (error) {
        console.error("Error sending comment:", error);
      }
    }
  };

  const showReplyButton = (comment, styles) =>
    !isReplyClicked || replyCommentId !== comment.id ? (
      <button
        onClick={() => handleReplyButtonClick(comment.id)}
        className={styles.reply_button}
      >
        Reply
      </button>
    ) : (
      ""
    );

  const handlePostCommentRating = async (data) => {
    const { commentId, value } = data;

    try {
      await ratePostComment(commentId, value);

      const updatedPosts = posts.map((post) => {
        const updatedComments = post.postsComments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, rate: value };
          }
          return comment;
        });

        return { ...post, postsComments: updatedComments };
      });

      dispatch({ type: "SET_POSTS", payload: updatedPosts });
    } catch (error) {
      console.log("Error rating comment", error);
    }
  };

  const handleDeletePostComment = async (commenId, postId) => {
    try {
      await deletePostComment(commenId);

      const modifiedPosts = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            postsComments: post.postsComments.filter(
              (postComment) => postComment.id !== commenId
            ),
          };
        }

        return post;
      });
      dispatch({ type: "SET_POSTS", payload: modifiedPosts });
    } catch (error) {
      console.log("Error deleting comment", error);
    }
  };

  return (
    <CommentBody
      post={post}
      commentReply={commentReply}
      isReplyClicked={isReplyClicked}
      replyCommentId={replyCommentId}
      showReplyButton={showReplyButton}
      handleReplyButtonClick={handleReplyButtonClick}
      handleSendCommentReply={handleSendCommentReply}
      handleDeletePostComment={handleDeletePostComment}
      handlePostCommentRating={handlePostCommentRating}
      handleCommentReplyChange={handleCommentReplyChange}
    />
  );
};

export default CommentBodyContainer;
