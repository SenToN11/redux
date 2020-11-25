import React from "react";
// import AddComment from './add-comment';
// import { removeComment }  from "../actions/index";

const CommentList = ({allcomments, removeComment}) => {
  return (
    <ul>
    {allcomments.map((comment, index) => {
      return (
        <li key={index} className={"list"}>
          <span className={"name"}>{comment.name}</span>
          <div className={"desc"}>
            <div className={"text"}>
              {comment.date}
            </div>
            <div className={"button"}>
              <button
                onClick={(ev) => {
                 if (allcomments.length === 0 ) {
                   return allcomments
                 } else {
                   removeComment(index);
                 }
                }}
              >
                Удалить
              </button>
            </div>
          </div>
          {comment.text}
        </li>
      );
    })}
  </ul>
  );
}

export default CommentList;

