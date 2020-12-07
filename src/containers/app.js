import React from 'react';
import { connect } from 'react-redux';

import Comments from '../components/add-comment';
import Form from '../components/comment-list';

import { onAdd, onRemove } from '../actions';

import '../index.css';

let App = (props) => {
	const {
		comments, onAdd, onRemove
	} = props;
	
	return (
		<div>
            <h1>Комментарии</h1>
			<Comments comments={comments} onRemove={onRemove} />
			<Form onAdd={onAdd} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		comments: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (name, message) => dispatch(onAdd(name, message)),
		onRemove: (id) => dispatch(onRemove(id))
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default App;