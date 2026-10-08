const myLibrary = [];

// 1. Create a factory function to generate new book objects
function createBook(title, author, pages, read) {
  return {
    id: crypto.randomUUID(),
    title: title,   // Maps the passed-in argument to the object property
    author: author,
    pages: pages,
    read: read,
    
    display() {
      return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
  };
}

// 2. Add the created book to the library array
function addBookToLibrary(title, author, pages,read) {
  const newBook = createBook(title, author, pages,read);
  myLibrary.push(newBook);
}

// 3. Loop through and view the books
function viewBooks() {
  for (const b of myLibrary) {
    console.log(b.display());
  }
}

