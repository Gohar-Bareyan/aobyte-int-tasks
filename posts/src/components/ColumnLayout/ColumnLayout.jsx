import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import SpeedDialComponent from "../SpeedDial";
import { ReactComponent as ColumnImage } from "../../images/frame.svg";
import { ReactComponent as DeleteIcon } from "../../images/delete_icon.svg";

import { getIconColor } from "../../helpers/functions";
import styles from "./ColumnLayout.module.scss";

class ColumnLayout extends React.Component {
  renderPosts(posts, handleDelete) {
    return posts.map((post) => {
      const color = getIconColor(post.averageRate);
      return (
        <div key={post.id} className={styles.posts_container}>
          <div className={styles.delete_icon_container}>
            <DeleteIcon
              onClick={() => handleDelete(post.id)}
              className={styles.delete_icon}
            />
          </div>
          <p>{post.body}</p>
          <FontAwesomeIcon
            icon={faStar}
            beat
            style={{ color }}
            className={styles.star_icon}
          />
          <p style={{ color }} className={styles.rating_number}>
            {post.averageRate}
          </p>
        </div>
      );
    });
  }

  render() {
    const {
      leftColumnPosts,
      leftPartActions,
      rightColumnPosts,
      rightPartActions,
      handleDeleteSinglePostOnLeft,
      handleDeleteSinglePostOnRight,
    } = this.props;

    return (
      <div className={styles.column_container}>
        <div className={styles.left_column}>
          <div className={styles.posts_content_container}>
            <ColumnImage
              className={
                leftColumnPosts.length > 0
                  ? styles.column_image_display
                  : styles.column_image
              }
            />
            {this.renderPosts(leftColumnPosts, handleDeleteSinglePostOnLeft)}
          </div>
          <div>
            <SpeedDialComponent actions={leftPartActions} position="left" />
          </div>
        </div>

        <div className={styles.right_column}>
          <div className={styles.posts_content_container}>
            <ColumnImage
              className={
                rightColumnPosts.length > 0
                  ? styles.column_image_display
                  : styles.column_image
              }
            />
            {this.renderPosts(rightColumnPosts, handleDeleteSinglePostOnRight)}
          </div>
          <SpeedDialComponent actions={rightPartActions} position="right" />
        </div>
      </div>
    );
  }
}

export default ColumnLayout;
