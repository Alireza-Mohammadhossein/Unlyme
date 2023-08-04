import React, { useEffect, useContext, useState, useRef } from "react";
import storeApi from "../../utils/storeApi";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import dayjs from 'dayjs';







export default function Comments({ card, index, listId }) {
  const { addComment } = useContext(storeApi);
  

  const [commentText, setCommentText] = useState('');
  const handleCommentText = (e) => {
    setCommentText(e.target.value);
  }


  const dayNow = dayjs().date();
  const monthNow = dayjs().format('MMM');
  const yearNow = dayjs().format('YYYY');
  const timeNow = dayjs().format('HH:mm');


  // scrolling to the last item
  const commentsContainerRef = useRef(null);
  useEffect(() => {
    if (card.comments && card.comments.length > 0 && commentsContainerRef.current) {
      if (commentsContainerRef.current) {
        commentsContainerRef.current.lastChild.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Scroll to the latest comment item after adding a new comment
  }, [card.comments.length]);

  


  return (
    <div className="comments_popover-container">
       <div className="comments_popover-list"  ref={commentsContainerRef}>
          {card.comments ? card.comments.map((comment) => (
            <div className="comments_popover-item" key={comment.id}>
              <div className="comments_popover-item-avatar">
                <Avatar>A</Avatar>
              </div>

              <div className="comments_popover-item-comment">
                <div className="comments_popover-item-comment-info">
                  <div className="comments_popover-item-comment-info-name">
                    User
                  </div>  

                  <div className="comments_popover-item-comment-info-date">
                    {comment.day} {comment.month}, {comment.time}
                  </div>
                </div>

                <div className="comments_popover-item-comment-text">
                  {comment.text}
                </div>
              </div>
            </div>
          ))
           :

            ''
          }
       </div>

       <div className="comments_popover-footer">
        <TextField
          className="comments_popover-footer-input"
          placeholder="Type here..."
          multiline
          maxRows={4}
          value={commentText}
          onChange={handleCommentText}
          onKeyDown={(e) => {

            if(e.key === 'Enter') {
              // if (commentsContainerRef.current) {
              //   commentsContainerRef.current.lastChild.scrollIntoView({ behavior: 'smooth' });
              // }

              e.preventDefault()
              addComment(card, commentText, index, listId, dayNow, monthNow, yearNow, timeNow)
              setCommentText('')
            }
          }}
        />

        <div className='comments_popover-footer-submit'>
          <Button
            className='comments_popover-footer-submit_btn'
            onClick={() => {
              addComment(card, commentText, index, listId, dayNow, monthNow, yearNow, timeNow)
              setCommentText('')
            }}
          >
            Send
          </Button>
        </div>
       </div>
    </div>
  )
}
