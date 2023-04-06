import { Map } from "immutable";

let book = Map({ name: "Harry Potter" });

function change(book) {
  return book.set("isPublish", true);
}

const changed = change(book);

const immutable = { book, changed };

export default immutable;
