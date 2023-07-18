import React from "react";
import {
  Stack,
  Accordion,
  Typography,
  Pagination,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./PostsWithComments.module.scss";

class PostsWithComments extends React.Component {

  render() {
    const {
      expanded,
      pagesCount,
      searchQuery,
      currentPage,
      getIconColor,
      filteredPosts,
      updatedPostsData,
      handlePageChange,
      handleAccordionChange,
      handleSearchQueryChange
    } = this.props;

    const posts = filteredPosts();

    return (
      <div className={styles.posts_with_comments_container}>
        <h3>Posts</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Search..."
          className={styles.search_input}
        />
        {posts.length > 0 ? (
          posts.map((post) => (
            <Accordion
              key={post.id}
              expanded={expanded === post.id}
              onChange={handleAccordionChange(post.id)}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      beat
                      style={{ color: getIconColor(post.averageRate) }}
                      className={styles.star_icon}
                    />
                    <ExpandMoreIcon className={styles.expand_icon} />
                  </>
                }
                aria-controls={`panel-${post.id}-content`}
                id={`panel-${post.id}-header`}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {post.title}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {post.body}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.comments_container}>
                  {post.comments.map((comment) => (
                    <Typography
                      key={comment.id}
                      className={styles.comment_body}
                    >
                      {comment.body}
                    </Typography>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <h3>No items found</h3>
        )}
        <Stack spacing={2} className={styles.pagination_container}>
          <Pagination
            count={Math.ceil(updatedPostsData.length / pagesCount)}
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    );
  }
}

export default PostsWithComments;
