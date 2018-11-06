var books = [{ b1: "a1" }, { b2: "a1" }, { b3: "a2" }];

//var authors = [{ a1: ["b1", "b2"] }, { a2: ["b3"] }];

let authors = [];

books.forEach(book => {
  for (let bookName in book) {
    let authorName = book[bookName];
    let foundAuthor = undefined;

    authors.forEach(author => {
      if (Object.keys(author).toString() == authorName) {
        foundAuthor = author;
        return;
      }
    });

    if (foundAuthor == undefined) {
      let newAuthor = {};
      newAuthor[authorName] = [bookName];
      authors.push(newAuthor);
    } else {
      let books = foundAuthor[authorName];
      books.push(bookName);
      foundAuthor[authorName] = books;
    }
  }
});
console.log(authors);
