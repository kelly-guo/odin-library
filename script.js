const myLibrary = [];

// 1. Create a factory function to generate new book objects
function createBook(title, author, pages) {
  return {
    id: crypto.randomUUID(),
    title: title,   // Maps the passed-in argument to the object property
    author: author,
    pages: pages,
    
    display() {
      return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
  };
}

// 2. Add the created book to the library array
function addBookToLibrary(title, author, pages) {
  const newBook = createBook(title, author, pages);
  myLibrary.push(newBook);
}

// 3. Loop through and view the books
function viewBooks() {
  for (const b of myLibrary) {
    console.log(b.display());
  }
}