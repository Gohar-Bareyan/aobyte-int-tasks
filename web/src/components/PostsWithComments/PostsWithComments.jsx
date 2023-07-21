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

import { ReactComponent as SendIcon } from "../../images/send_icon.svg";
import { ReactComponent as TrashBoxIcon } from "../../images/trash_box_icon.svg";
import ItemNotFound from "../../images/item_not_found.jpg";
import { getIconColor } from "../../helpers/functions";

import styles from "./PostsWithComments.module.scss";

const PostsWithComments = (props) => {
  const {
    posts,
    comment,
    expanded,
    allPosts,
    PAGES_COUNT,
    searchQuery,
    currentPage,
    isReplyClicked,
    handlePageChange,
    handleSendComment,
    setIsReplyClicked,
    handleCommentChange,
    handleAccordionChange,
    handleDeletePostComment,
    handleSearchQueryChange,
  } = props;

  return (
    <div className={styles.posts_with_comments_container}>
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
              <Typography
                sx={{ width: "33%", flexShrink: 0 }}
                className={styles.post_title}
              >
                {post.title}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {post.body}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordion_details}>
              <div className={styles.add_comment_textarea_container}>
                <textarea
                  placeholder="Add a comment"
                  className={styles.add_comment_textarea}
                  value={comment}
                  onChange={handleCommentChange}
                  onKeyDown={(event) => handleSendComment(event, post.id)}
                />
                <SendIcon
                  className={styles.send_comment_icon}
                  onClick={(event) => handleSendComment(event, post.id, true)}
                />
              </div>

              <div>
                {post.postsComments.map((comment) => (
                  <div className={styles.comments_container} key={comment.id}>
                    <div className={styles.comment_body}>
                      <div className={styles.comment}>
                        <p> {comment.body} </p>
                        <TrashBoxIcon
                          className={styles.trash_box_icon}
                          onClick={() =>
                            handleDeletePostComment(comment.id, post.id)
                          }
                        />
                      </div>
                      {isReplyClicked ? (
                        <div>
                          <textarea
                            placeholder="Reply"
                            className={styles.reply_textarea}
                          />
                          <SendIcon className={styles.reply_comment_icon} />
                        </div>
                      ) : (
                        <button
                          onClick={() => setIsReplyClicked(true)}
                          className={styles.reply_button}
                        >
                          Reply
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <img src={ItemNotFound} alt="" className={styles.item_not_found} />
      )}
      {allPosts.length > 0 ? (
        <Stack spacing={2} className={styles.pagination_container}>
          <Pagination
            count={Math.ceil(posts.length / PAGES_COUNT)}
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostsWithComments;
