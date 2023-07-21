import React, { useContext, useState } from "react";

import PostsWithComments from "../../components/PostsWithComments";
import { addPostComment, deletePostComment } from "../../api";
import { DataContext } from "../../store/dataContext";
import { PAGES_COUNT } from "../../constants";
import { filteredPosts } from "../../helpers/functions";

const PostsWithCommentsContainer = (props) => {
  const { posts } = props;

  const { dispatch } = useContext(DataContext);

  const [comment, setComment] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isReplyClicked, setIsReplyClicked] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSendComment = async (event, postId, isClicked = false) => {
    if (event.key === "Enter" || isClicked) {
      event.preventDefault();
      try {
        const newPostComment = await addPostComment({
          postId,
          comment,
          sender: "Gohar Bareyan",
        });

        setComment("");

        const modifiedPosts = posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              postsComments: [newPostComment, ...post.postsComments],
            };
          }

          return post;
        });

        dispatch({ type: "SET_POSTS", payload: modifiedPosts });
      } catch (error) {
        console.error("Error sending comment:", error);
      }
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

  const allPosts = filteredPosts(currentPage, posts, searchQuery);

  return (
    <PostsWithComments
      posts={posts}
      comment={comment}
      expanded={expanded}
      allPosts={allPosts}
      PAGES_COUNT={PAGES_COUNT}
      currentPage={currentPage}
      searchQuery={searchQuery}
      isReplyClicked={isReplyClicked}
      handlePageChange={handlePageChange}
      handleSendComment={handleSendComment}
      setIsReplyClicked={setIsReplyClicked}
      handleCommentChange={handleCommentChange}
      handleAccordionChange={handleAccordionChange}
      handleDeletePostComment={handleDeletePostComment}
      handleSearchQueryChange={handleSearchQueryChange}
    />
  );
};

export default PostsWithCommentsContainer;
