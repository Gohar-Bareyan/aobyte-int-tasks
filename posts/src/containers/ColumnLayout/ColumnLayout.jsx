import React from "react";

import { ReactComponent as AddIcon } from "../../images/add_icon.svg";
import { ReactComponent as SortIcon } from "../../images/sort_icon.svg";

import ColumnLayout from "../../components/ColumnLayout";

class ColumnLayoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftColumnPosts: [],
      rightColumnPosts: [],
      postsSortedByRating: [],
      isDescendingOrder: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.posts !== prevProps.posts) {
      const postsSortedByRating = [...this.props.posts].sort(
        (a, b) => b.averageRate - a.averageRate
      );

      this.setState({ postsSortedByRating });
    }
  };

  handleAddSinglePost = (column) => {
    const { postsSortedByRating } = this.state;

    if (postsSortedByRating.length === 0) {
      return;
    }

    this.setState((prevState) => ({
      [column]: [...prevState[column], postsSortedByRating.shift()],
    }));
  };

  handleAddSinglePostOnLeft = () => {
    this.handleAddSinglePost("leftColumnPosts");
  };

  handleAddSinglePostOnRight = () => {
    this.handleAddSinglePost("rightColumnPosts");
  };

  handleDeleteSinglePost = (column, postId) => {
    this.setState((prevState) => {
      const { postsSortedByRating } = prevState;
      const columnPosts = [...prevState[column]];

      const deletedPost = columnPosts.find((post) => post.id === postId);

      if (deletedPost) {
        const updatedColumnPosts = columnPosts.filter(
          (post) => post.id !== postId
        );
        const updatedPostsSortedByRating = [
          deletedPost,
          ...postsSortedByRating,
        ];

        return {
          postsSortedByRating: updatedPostsSortedByRating,
          [column]: updatedColumnPosts,
        };
      }

      return prevState;
    });
  };

  handleDeleteSinglePostOnLeft = (postId) => {
    this.handleDeleteSinglePost("leftColumnPosts", postId);
  };

  handleDeleteSinglePostOnRight = (postId) => {
    this.handleDeleteSinglePost("rightColumnPosts", postId);
  };

  handleSortPosts = (column) => {
    const { isDescendingOrder } = this.state;
    const posts = [...this.state[column]];

    posts.sort((a, b) => {
      if (isDescendingOrder) {
        return a.averageRate - b.averageRate;
      }
      return b.averageRate - a.averageRate;
    });

    this.setState((prevState) => ({
      [column]: posts,
      isDescendingOrder: !prevState.isDescendingOrder,
    }));
  };

  handleSortPostsOnLeft = () => {
    this.handleSortPosts("leftColumnPosts");
  };

  handleSortPostsOnRight = () => {
    this.handleSortPosts("rightColumnPosts");
  };

  render() {
    const { leftColumnPosts, rightColumnPosts } = this.state;

    const leftPartActions = [
      {
        icon: <AddIcon onClick={this.handleAddSinglePostOnLeft} />,
        name: "Add",
      },
      {
        icon: <SortIcon onClick={this.handleSortPostsOnLeft} />,
        name: "Sort",
      },
    ];

    const rightPartActions = [
      {
        icon: <AddIcon onClick={this.handleAddSinglePostOnRight} />,
        name: "Add",
      },
      {
        icon: <SortIcon onClick={this.handleSortPostsOnRight} />,
        name: "Sort",
      },
    ];

    return (
      <ColumnLayout
        leftColumnPosts={leftColumnPosts}
        leftPartActions={leftPartActions}
        rightPartActions={rightPartActions}
        rightColumnPosts={rightColumnPosts}
        handleDeleteSinglePostOnLeft={this.handleDeleteSinglePostOnLeft}
        handleDeleteSinglePostOnRight={this.handleDeleteSinglePostOnRight}
      />
    );
  }
}

export default ColumnLayoutContainer;
