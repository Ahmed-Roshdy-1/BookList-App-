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
        const books = new Book(title,author,isbn);
        
       books.foreach((book) => UI.addBookToList(book));
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


    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }


    static showAlert(massage,className){
        const div =document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(massage));
        const container= document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        // vanish in 3 seconds
        setTimeout(()=>document.querySelector('.alert').remove(),3000);

    }


    static crearFields(){
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

    // Validate
    if(title==='' || author==='' || isbn==='isbn'){
        UI.showAlert('please fill in all fields','danger')
    }else{

        // Instatiate book
         const book = new Book(title,author,isbn);


        // Add Book to UI
        UI.addBookToList(book); 

        // Add Book to Store
       

        UI.showAlert('Book added ','success');

       // Clear fields
       UI.crearFields();

    }

       
});



//Event: Remove a Book

document.querySelector('#book-list').addEventListener('click',(e)=>
{
    // Remove book from UI
    UI.deleteBook(e.target);
     

    // Remove book from Store
   

    UI.showAlert('Book Removed ','success');
});