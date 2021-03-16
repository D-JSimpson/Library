let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
      return title + " by " + author + ', ' + pages + ' pages, ' + read; 
    }
}
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'read');
const book2 = new Book('The Hobbit 2', 'J.R.R. Tolkien', 395, 'not read yet');
const book3 = new Book('The Hobbit 3', 'J.R.R. Tolkien', 495, 'not read yet');
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
console.log(myLibrary);

const display = document.getElementById('book-display');
for(let i = 0; i < 9; i++){
    const p = document.createElement('p');
    p.id = i;
    p.style.cssText = "margin: 0;"
    display.appendChild(p);
}
for(let i = 0; i < myLibrary.length; i++){
    const p = document.getElementById('' + i + '');
   p.innerText += myLibrary[i].title
   p.innerText += myLibrary[i].author
   p.innerText += myLibrary[i].pages
   p.innerText += myLibrary[i].read
}
myLibrary.forEach(function(book){
console.log(book);
})

function addBookToLibrary(){

}