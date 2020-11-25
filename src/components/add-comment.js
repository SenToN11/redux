import React from "react";

// import { addComment } from '../actions/index.js'

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      text: '',
      name: ''
    };

  }

render() {
  let comment = {
    name: this.state.name,
    text: this.state.text,
    date: this.state.date
  }

  return (
    <form className={"form"}>
    <input
      type="text"
      required
      placeholder="Ваше имя "
      value={this.state.name}
      onChange={ev => {
       this.setState({ name: ev.target.value })
      }}
    />
    <textarea
      type="text"
      required
      placeholder="Комментарий"
      value={this.state.text}
      onChange={ev => {
        this.setState({ text: ev.target.value });
      }}
    ></textarea>
    <button
      onClick={(ev) => {
        ev.preventDefault();
        if (this.state.name === "" || this.state.text === "") {
          alert("Заполнить поле");
        } else {
          this.props.addComment(comment);
        }
      }}
    >
      Отправить
    </button>
  </form>
  )
}
}

export default AddComment;

