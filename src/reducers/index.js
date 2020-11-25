import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/index.js'

const allcomments = (state = [], action) => {

  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        action.payload
      ]

    case REMOVE_COMMENT:
      return state.allcomments.filter((comment, id) => id !== action.id );

    default:
      return state;
  }
}

export default allcomments;

