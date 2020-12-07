import React from 'react';

const Comments = ({
  comments,
  onRemove
}) => {
  const getDate = (value) => {
	const date = new Date(Number(value));
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
		
    return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()) ;
  }
 
  return (
    <ul>
     { comments.map((comment) => {
        return (
	      <li key={comment.id} className={"list"}>
            <article className="comment">
              <h2 className="name">{comment.autor}</h2>
              <div className="text">{comment.text}</div>
              <div className="desc">
                
                <time className="comment-time">{getDate(comment.datetime)}</time>
                <div className={"button"}>
                  <button 
                    onClick={e => {onRemove(comment.id)}}>
                    Удалить
                  </button>
                </div>
              </div>	
            </article>
	      </li>
        )
      }) }
    </ul>
  );
};

export default Comments;