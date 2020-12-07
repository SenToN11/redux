const comments = (state, action) => {
	switch (action.type) {
		case 'ADD_COMMENT':
			return [
				...state,
				{ id: action.id, autor: action.name, text: action.message, datetime: action.datetime }
			]
		
		case 'REMOVE_COMMENT':
			return state.filter(comment => action.id !== comment.id);
			
		default:
			return state;
	}
}

export default comments;
