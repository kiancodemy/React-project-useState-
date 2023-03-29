import { useState } from "react";
import BookEdit from "./BookEdit";
const BookShow = ({ book, deletebook, edit }) => {
  const [editt, showedit] = useState(false);
  const handleedit = () => {
    showedit(!editt);
  };

  const finish = (id, newtitle) => {
    edit(id, newtitle);
    showedit(false);
  };

  let content = <h3>{book.title}</h3>;

  if (editt) {
    content = <BookEdit edit={edit} book={book} finish={finish}></BookEdit>;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="kian"
      ></img>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleedit}>
          Edit
        </button>
        <button className="delete" onClick={() => deletebook(book.id)}>
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
