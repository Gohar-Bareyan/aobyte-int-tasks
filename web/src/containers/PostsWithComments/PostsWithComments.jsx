import React, { useContext, useState } from "react";

import PostsWithComments from "../../components/PostsWithComments";

import { addPostComment } from "../../api";
import { PAGES_COUNT } from "../../constants";
import { DataContext } from "../../store/dataContext";
import { filteredPosts } from "../../helpers/functions";

const PostsWithCommentsContainer = (props) => {
  const { posts } = props;

  const { dispatch } = useContext(DataContext);

  const [comment, setComment] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [replyCommentId, setReplyCommentId] = useState(null);
  const [isReplyClicked, setIsReplyClicked] = useState(false);
  const [isDescendingOrder, setIsDescendingOrder] = useState(true);

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

  const handleSortComments = (post) => {
    post.postsComments.sort((a, b) => {
      if (isDescendingOrder) {
        return a.rate - b.rate;
      }
      return b.rate - a.rate;
    });

    setIsDescendingOrder((prevIsDescendingOrder) => !prevIsDescendingOrder);
  };

  const handleReplyButtonClick = (postId) => {
    setIsReplyClicked(true);
    setReplyCommentId(postId);
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
      replyCommentId={replyCommentId}
      isReplyClicked={isReplyClicked}
      handlePageChange={handlePageChange}
      handleSendComment={handleSendComment}
      handleSortComments={handleSortComments}
      handleCommentChange={handleCommentChange}
      handleAccordionChange={handleAccordionChange}
      handleReplyButtonClick={handleReplyButtonClick}
      handleSearchQueryChange={handleSearchQueryChange}
    />
  );
};

export default PostsWithCommentsContainer;
