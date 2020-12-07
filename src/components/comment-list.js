import React,  { useState } from 'react';

const Form = ({
  onAdd
}) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
	
  return (
    <form className="form" onSubmit={ev => {ev.preventDefault();
     
      if (name === "" || message === "") {
        alert("Заполнить поле");
      } else {
        onAdd(name, message)
      };
      ev.target.userInput.value = '';
      ev.target.userText.value = '';
     }}>
      <input
        className="form-input"
        type="text"
        placeholder="Имя"
        name="userInput"
      onChange={(ev) => setName(ev.target.value)}
      />

      <textarea
        placeholder="Сообщение"
        name="userText"
        onChange={(ev) => setMessage(ev.target.value)}
      />

      <input
        className="form-button"
        type="submit"
        value="Добавить"
      />
    </form>
  )
};

export default Form;