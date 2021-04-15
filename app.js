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
           <td>${book.author}</td>
           <td>${book.isbn}</td>
           <td><a href="#" class="btn btn-danger  mr-0 pr-2 btn-sm 
           delete">x</a></td>   
         `;
         list.appendChild(row);
    }

    static crearFiekds(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }

}


// Store Class: Handles Storage

// Event: Display Books

document.addEventListener('DOMContentLoaded',UI.displayBooks);



// Event: Add a Book

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    //prevent actual submit
    e.preventDefault();

    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn= document.querySelector('#isbn').value;

    // Instatiate book
    const book = new Book(title,author,isbn);


    // Add Book to UI
    UI.addBookToList(book); 

    // Clear fields
    UI.crearFiekds();
});

//Event: Remove a Book