let nextCommentId = 0;

export const onAdd = (name, message) => ({
	type: 'ADD_COMMENT',
	id: ++nextCommentId,
	name,
	message,
	datetime: Date.now().valueOf()
});

export const onRemove = id=> ({
	type: 'REMOVE_COMMENT',
	id
});
