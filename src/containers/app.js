import React from "react";
import { connect } from "react-redux";

import CommentList from "../components/comment-list";
import AddComment from "../components/add-comment";

import { addComment, removeComment} from "../actions/index";

let App = ({allcomments, addComment, removeComment}) => {
 
  return (
    <div>
      <CommentList allcomments={allcomments} removeComment={removeComment}/>
      <AddComment addComment={addComment}/>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    allcomments: state.allcomments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    removeComment: (id) => dispatch(removeComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;