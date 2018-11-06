var books = [{ b1: "a1" }, { b2: "a1" }, { b3: "a2" }];

//var authors = [{ a1: ["b1", "b2"] }, { a2: ["b3"] }];

let authors = [];

books.forEach(book => {
  let bookName = Object.keys(book).toString();
  let authorName = book[bookName];

  let author = undefined;

  authors.forEach(authorItem => {
    if (authorItem[authorName]) {
      author = authorItem;
    }
  });

  if (author) {
    author[authorName].push(bookName);
  } else {
    author = {};
    author[authorName] = [bookName];
    authors.push(author);
  }
});
console.log(authors);
