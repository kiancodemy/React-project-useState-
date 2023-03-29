import { useState } from "react";
function BookCreat({ onCreate }) {
  const [title, settitle] = useState("");

  const handesubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    settitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handesubmit}>
        <h2 style={{ color: "white", fontWeight: "bold", fontSize: "28px" }}>
          Add a Book
        </h2>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}
export default BookCreat;
