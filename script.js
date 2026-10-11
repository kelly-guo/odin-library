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

function BookPrototype(){
    BookPrototype.prototype.toggleRead = function(){
        this.read=!this.read;
    }
};

function displayBooks() {
    const library = document.querySelector("#library");
    library.innerHTML="";

    for (const b of myLibrary){
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.dataset.id = b.id;

        bookCard.innerHTML = `
        <p> Title: ${b.title}</p>
        <p> Author: ${b.author}</p>
        <p> Pages: ${b.pages}</p>
        <p> Read: ${b.read ? "Yes" : "No"}</p>
        <button class="toggle-read">Toggle Read</button>
        <button class="remove-book">Remove Book</button>
        `;

        library.appendChild(bookCard);
    }
}

// 2. Add the created book to the library array
function addBookToLibrary(title, author, pages,read) {
  const newBook = createBook(title, author, pages,read);
  Object.setPrototypeOf(newBook,BookPrototype.prototype);
  myLibrary.push(newBook);

  displayBooks();
}

// 3. Loop through and view the books
function viewBooks() {
  for (const b of myLibrary) {
    console.log(b.display());
  }
}

const library = document.querySelector("#library");
library.addEventListener("click", function(event) {
    if (event.target.classList.contains(".remove-book")){
        const bookCard = event.target.closest("book-card");
        const id = bookCard.dataset.id;

        const index = myLibrary.findIndex(book => book.id == id);
        if (index!=-1)myLibrary.splice(index,1)

        displayBooks();
    }

    if (event.target.classList.contains(".toggle-read")){
        const bookCard = event.target.closest("book-card");
        const id = bookCard.dataset.id;
        const book=myLibrary.findIndex(book => book.id == id);
        book.toggleRead();
        displayBooks();


    }
});


