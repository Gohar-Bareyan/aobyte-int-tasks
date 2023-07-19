import React from "react";

import DataContext from "../../contexts/DataContext";
import PostsWithComments from "../../components/PostsWithComments";
import { addPostComment, deletePostComment } from "../../api";
import { PAGES_COUNT } from "../../constants";

class PostsWithCommentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      expanded: false,
      currentPage: 1,
      searchQuery: "",
      isAddCommentEntered: false,
      isPostCommentDeleted: false,
    };
  }

  static contextType = DataContext;

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.isAddCommentEntered) {
      await this.context.fetchPostsData();
      this.setState({ isAddCommentEntered: false });
    }
    if (this.state.isPostCommentDeleted) {
      await this.context.fetchPostsData();
      this.setState({ isPostCommentDeleted: false });
    }
  }

  handleAccordionChange = (panel) => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : false });
  };

  handlePageChange = (event, page) => {
    this.setState({ currentPage: page });
  };

  handleSearchQueryChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleEnterKeyPress = async (event, postId) => {
    if (event.key === "Enter") {
      event.preventDefault();
      try {
        await addPostComment({
          postId,
          comment: this.state.comment,
          sender: "Gohar Bareyan",
        });
        this.setState({ isAddCommentEntered: true });
      } catch (error) {
        console.error("Error sending comment:", error);
      }
    }
  };

  deletePostComment = async (commenId) => {
    try {
      await deletePostComment(commenId);
      this.setState({ isPostCommentDeleted: true });
    } catch (error) {
      console.log("Error deleting comment", error);
    }
  };

  render() {
    const { posts } = this.props;
    const { expanded, currentPage, searchQuery } = this.state;

    const startIndex = (currentPage - 1) * PAGES_COUNT;
    const endIndex = startIndex + PAGES_COUNT;
    const paginatedPostsData = posts?.slice(startIndex, endIndex);

    const filteredPosts = function filterData() {
      const filteredPosts = paginatedPostsData.filter((post) =>
        post.posts_comments.some((comment) =>
          comment.body.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );

      filteredPosts.forEach((post) => {
        post.posts_comments.sort((a, b) => {
          const dateA = new Date(a.updatedAt).getTime();
          const dateB = new Date(b.updatedAt).getTime();
          return dateB - dateA;
        });
      });

      return filteredPosts;
    };

    return (
      <PostsWithComments
        posts={posts}
        expanded={expanded}
        PAGES_COUNT={PAGES_COUNT}
        currentPage={currentPage}
        searchQuery={searchQuery}
        filteredPosts={filteredPosts}
        handlePageChange={this.handlePageChange}
        deletePostComment={this.deletePostComment}
        handleCommentChange={this.handleCommentChange}
        handleEnterKeyPress={this.handleEnterKeyPress}
        handleAccordionChange={this.handleAccordionChange}
        handleSearchQueryChange={this.handleSearchQueryChange}
      />
    );
  }
}

export default PostsWithCommentsContainer;
