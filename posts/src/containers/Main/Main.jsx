import React from "react";

import DataContext from "../../contexts/DataContext";
import ColumnLayoutContainer from "../ColumnLayout";
import PostsWithCommentsContainer from "../PostsWithComments";

import styles from "./Main.module.scss";

class MainContainer extends React.Component {
  static contextType = DataContext;

  render() {
    const { posts } = this.context;

    return (
      <div className={styles.main_container}>
        <PostsWithCommentsContainer posts={posts} />
        <ColumnLayoutContainer posts={posts} />
      </div>
    );
  }
}

export default MainContainer;
