import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';
import { createStore } from 'redux';
import comments from './reducers';


import "./index.css";

const initialState = [
  { id: 1, autor: "Max", text: "Hello World", datetime: "1604639443288" },
  { id: 2, autor: "Dmitry", text: "Пример комментария", datetime: "1604639443688" },
  { id: 3, autor: "Roman", text: "Привет мир", datetime: "1604639448788" },
  { id: 4, autor: "Maria", text: "Пример комментария2", datetime: "1604656854413" }
];

const store = createStore(comments,(localStorage['comments']) ? JSON.parse(localStorage['comments']) : initialState);

store.subscribe(() => {
  localStorage['comments'] = JSON.stringify(store.getState(initialState));
})
	
ReactDOM.render(
	<App store={store} />,
	document.querySelector("#app")
)