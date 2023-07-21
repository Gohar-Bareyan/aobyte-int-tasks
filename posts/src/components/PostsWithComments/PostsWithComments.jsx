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

// import { ReactComponent as SendIcon } from "../../images/send_icon.svg";
import { ReactComponent as TrashBoxIcon } from "../../images/trash_box_icon.svg";
import { getIconColor } from "../../helpers/functions";

import styles from "./PostsWithComments.module.scss";

class PostsWithComments extends React.Component {
  render() {
    const {
      posts,
      comment,
      expanded,
      PAGES_COUNT,
      searchQuery,
      currentPage,
      filteredPosts,
      handlePageChange,
      deletePostComment,
      handleEnterKeyPress,
      handleCommentChange,
      handleAccordionChange,
      handleSearchQueryChange,
    } = this.props;

    const allPosts = filteredPosts();

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
        {allPosts.length > 0 ? (
          allPosts.map((post) => (
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
              <AccordionDetails className={styles.accordion_details}>
                <textarea
                  placeholder="Add a comment"
                  className={styles.add_comment_textarea}
                  value={comment}
                  onChange={handleCommentChange}
                  onKeyDown={(event) => handleEnterKeyPress(event, post.id)}
                />
                <div>
                  {post.posts_comments.map((comment) => (
                    <div className={styles.comments_container} key={comment.id}>
                      <div className={styles.comment_body}>
                        <div className={styles.comment}>
                          <p> {comment.body} </p>
                          <TrashBoxIcon
                            className={styles.trash_box_icon}
                            onClick={() =>
                              deletePostComment(comment.id)
                            }
                          />
                        </div>
                        <div>
                          <textarea
                            placeholder="Reply"
                            className={styles.reply_textarea}
                          />
                          {/* <SendIcon className={styles.send_icon} /> */}
                        </div>
                      </div>
                    </div>
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
            count={Math.ceil(posts.length / PAGES_COUNT)}
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
