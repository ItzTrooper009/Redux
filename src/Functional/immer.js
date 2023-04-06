import produce from "immer";
let book = { name: "Harry Potter" };

function change(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

const changed = change(book);

const immer = { book, changed };

export default immer;
