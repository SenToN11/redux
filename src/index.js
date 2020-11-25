import React from "react";
// import  { render } from "react-dom";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import CommentApp from "./containers/app";
import {createStore} from "redux";
import allcomments from "./reducers/index";

import "./index.css";

export const initialState = {
  allcomments: [
  {
    name: "Дмитрий",
    text: "Мне нравится!",
    date: "20:46 21.07.2020",
    
  },
  {
  
    name: "Мария",
    text: "Ободряю",
    date: "21:26 21.07.2020",
    
  },
  {
  
    name: "Роман",
    text: "Нужно больше времени!",
    date: "23:12 21.07.2020",
    
  },
]
};

const store = createStore(allcomments, initialState);

ReactDOM.render(
  <Provider store={store}>
  <CommentApp />
</Provider>,
document.querySelector('#app')
);
