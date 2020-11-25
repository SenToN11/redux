let nextCommentId = 0;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    id: nextCommentId++,
    payload: comment
    }
  }


export const removeComment = (id) => {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

