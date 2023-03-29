import BookShow from "./BookShow";
const BookList = ({ books, deletebook, edit }) => {
  const renderbook = books.map((books) => {
    return (
      <BookShow
        edit={edit}
        key={books.id}
        book={books}
        deletebook={deletebook}
      />
    );
  });

  return <div className="book-list">{renderbook}</div>;
};

export default BookList;
