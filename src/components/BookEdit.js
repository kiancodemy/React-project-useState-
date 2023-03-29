import { useState } from "react";

const BookEdit = ({ book, handleedit, finish }) => {
  const [title, settitle] = useState("");
  const hadlechange = (event) => {
    settitle(event.target.value);
  };
  const handesubmit = (e) => {
    e.preventDefault();
    finish(book.id, title);
  };
  return (
    <form onSubmit={handesubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={hadlechange} />
      <button className="button is-primary">save</button>
    </form>
  );
};

export default BookEdit;
