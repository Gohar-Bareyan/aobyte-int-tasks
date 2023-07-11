import React from "react";

import postsData from "../../posts.json";
import ColumnLayoutContainer from "../ColumnLayout";
import PostsWithCommentsContainer from "../PostsWithComments";
import { RATE_COLORS, RATE_NUMBERS } from "../../constants";

import styles from "./Main.module.scss";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedPostsData: [],
    };
  }

  calculateAverageRate = (comments) => {
    if (!comments || comments.length === 0) {
      return 0;
    }

    const totalRate = comments.reduce((sum, comment) => sum + comment.rate, 0);
    return totalRate / comments.length;
  };

  updateAverageRate = () => {
    return postsData.map((post) => {
      const averageRate = this.calculateAverageRate(post.comments);
      return {
        ...post,
        averageRate: +averageRate.toFixed(1),
      };
    });
  };

  getIconColor = (averageRate) => {
    switch (true) {
      case averageRate > RATE_NUMBERS.FOUR:
        return RATE_COLORS.DARK_GREEN;
      case averageRate > RATE_NUMBERS.THREE:
        return RATE_COLORS.LIGHT_GREEN;
      case averageRate > RATE_NUMBERS.TWO:
        return RATE_COLORS.YELLOW;
      case averageRate > RATE_NUMBERS.ONE:
        return RATE_COLORS.ORANGE;
      default:
        return RATE_COLORS.RED;
    }
  };

  componentDidMount() {
    const updatedPostsData = this.updateAverageRate();
    this.setState({ updatedPostsData });
  }

  render() {
    const { updatedPostsData } = this.state;

    return (
      <div className={styles.main_container}>
        <PostsWithCommentsContainer
          updatedPostsData={updatedPostsData}
          getIconColor={this.getIconColor}
        />
        <ColumnLayoutContainer
          updatedPostsData={updatedPostsData}
          getIconColor={this.getIconColor}
          updateAverageRate={this.updateAverageRate}
        />
      </div>
    );
  }
}

export default MainContainer;
