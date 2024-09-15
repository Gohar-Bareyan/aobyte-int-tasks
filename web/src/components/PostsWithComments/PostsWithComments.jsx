import { Stack, Accordion, Pagination, AccordionDetails } from "@mui/material";

import SearchBar from "./SearchBar";
import AddComment from "./AccordionDetails/AddComment";
import AccordionSummaryComponent from "./AccordionSummary";
import CommentBodyContainer from "../../containers/PostsWithComments/CommentBody";

import ItemNotFound from "../../images/item_not_found.jpg";
import { ReactComponent as SortIcon } from "../../images/sort_icon.svg";

import styles from "./PostsWithComments.module.scss";

const PostsWithComments = (props) => {
  const {
    posts,
    comment,
    expanded,
    allPosts,
    searchQuery,
    currentPage,
    PAGES_COUNT,
    replyCommentId,
    isReplyClicked,
    handlePageChange,
    handleSendComment,
    handleSortComments,
    handleCommentChange,
    handleAccordionChange,
    handleReplyButtonClick,
    handleSearchQueryChange,
  } = props;

  return (
    <div className={styles.posts_with_comments_container}>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      {allPosts.length > 0 ? (
        allPosts.map((post) => (
          <Accordion
            key={post.id}
            expanded={expanded === post.id}
            onChange={handleAccordionChange(post.id)}
            className={styles.accordion}
          >
            <AccordionSummaryComponent post={post} />

            <AccordionDetails className={styles.accordion_details}>
              <AddComment
                comment={comment}
                post={post}
                handleCommentChange={handleCommentChange}
                handleSendComment={handleSendComment}
              />

              <SortIcon
                className={styles.sort_icon}
                onClick={() => handleSortComments(post)}
              />

              <CommentBodyContainer
                post={post}
                posts={posts}
                isReplyClicked={isReplyClicked}
                replyCommentId={replyCommentId}
                handleReplyButtonClick={handleReplyButtonClick}
              />
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
