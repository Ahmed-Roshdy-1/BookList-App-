// Book Class: Represents a Book

class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}



// UI Class: Handle UI Tasks

class UI{
    static displayBooks(){
        const StoredBooks = [
           {
            title: 'Book One',
            author: 'John Doe',
            isbn:   '354853'
           },
           {
               title: 'Book Two',
               author:  'Jane Doe',
               isbn:   '4515525'
           }
        ];
        const books= StoredBooks;
        books.forEach((book)=>UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row  = document.createElement('tr');

        row.innerHTML = `  
           <td>${book.title}</td>
           <td>${book.title}</td>
           <td>${book.title}</td>
           <td><a href="#" class="btn btn-danger btn-sm 
           delete">x</a></td>   
         `;
    }

}


// Store Class: Handles Storage

// Event: Display Books

document.addEventListener('DOMContentLoaded',UL.displayBooks);

// Event: Add a Book

//Event: Remove a Book