import React from "react";

import PostsWithComments from "../../components/PostsWithComments";

class PostsWithCommentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      currentPage: 1,
      searchQuery: "",
    };
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

  render() {
    const { expanded, currentPage, searchQuery } = this.state;
    const { updatedPostsData, getIconColor } = this.props;

    const pagesCount = 5;
    const startIndex = (currentPage - 1) * pagesCount;
    const endIndex = startIndex + pagesCount;
    const paginatedPostsData = updatedPostsData?.slice(startIndex, endIndex);

    const filteredPosts = function filterData() {
      return paginatedPostsData.filter((post) =>
        post.comments.some((comment) =>
          comment.body.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    };

    return (
      <PostsWithComments
        expanded={expanded}
        pagesCount={pagesCount}
        currentPage={currentPage}
        searchQuery={searchQuery}
        getIconColor={getIconColor}
        filteredPosts={filteredPosts}
        updatedPostsData={updatedPostsData}
        handlePageChange={this.handlePageChange}
        handleAccordionChange={this.handleAccordionChange}
        handleSearchQueryChange={this.handleSearchQueryChange}
      />
    );
  }
}

export default PostsWithCommentsContainer;
