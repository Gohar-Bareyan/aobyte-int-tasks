import { Rating } from "@mui/material";

import { ReactComponent as SendIcon } from "../../../../images/send_icon.svg";
import { ReactComponent as TrashBoxIcon } from "../../../../images/trash_box_icon.svg";

import { getIconColor } from "../../../../helpers/functions";

import styles from "./CommentBody.module.scss";
import UserData from "../UserData/UserData";

const CommentBody = (props) => {
  const {
    post,
    commentReply,
    isReplyClicked,
    replyCommentId,
    showReplyButton,
    handleSendCommentReply,
    handleDeletePostComment,
    handlePostCommentRating,
    handleCommentReplyChange,
  } = props;

  return (
    <div>
      {post.postsComments.map((comment) => (
        <div className={styles.comments_container} key={comment.id}>
          <div className={styles.comment_body}>
            <div className={styles.comment}>
              <UserData post={post} />
              <div className={styles.comment_body_content}>
                <p className={styles.comment_body_text}>{comment.body}</p>
                <div className={styles.actions_container}>
                  <TrashBoxIcon
                    className={styles.trash_box_icon}
                    onClick={() => handleDeletePostComment(comment.id, post.id)}
                  />

                  {showReplyButton(comment, styles)}

                  <Rating
                    className={styles.rating_icon}
                    value={+comment.rate}
                    precision={0.5}
                    onChange={(e) =>
                      handlePostCommentRating({
                        value: e.target.value,
                        postId: post.id,
                        commentId: comment.id,
                      })
                    }
                    onChangeActive={(event, newHover) => {
                      // Handle hover effect if needed
                    }}
                    style={{ color: getIconColor(comment.rate) }}
                  />
                </div>
              </div>
              {isReplyClicked && replyCommentId === comment.id && (
                <div className={styles.reply_container}>
                  <textarea
                    placeholder="Reply"
                    className={styles.reply_textarea}
                    value={commentReply}
                    onChange={handleCommentReplyChange}
                    onKeyDown={(event) =>
                      handleSendCommentReply(event, comment.id)
                    }
                  />
                  <SendIcon
                    className={styles.reply_comment_icon}
                    onClick={(event) =>
                      handleSendCommentReply(event, comment.id, true)
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentBody;
