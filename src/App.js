import { useState } from "react";
import BookCreat from "./components/BookCreat";
import BookList from "./components/BookList";

const App = () => {
  const [book, setbook] = useState([]);
  const deletebook = (id) => {
    const update = book.filter((book) => {
      return book.id !== id;
    });

    setbook(update);
  };

  const edit = (id, newtitle) => {
    const updatebook = book.map((book) => {
      if (book.id === id) {
        return { ...book, title: newtitle };
      }

      return book;
    });

    setbook(updatebook);
  };

  const createbook = (title) => {
    const update = [
      ...book,
      { id: Math.trunc(Math.random() * 999), title: title },
    ];
    setbook(update);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={book} deletebook={deletebook} edit={edit} />
      <BookCreat onCreate={createbook}></BookCreat>
    </div>
  );
};
export default App;
