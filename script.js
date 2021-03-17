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
const book2 = new Book('The Hobbit 2', 'J.R.R. Tolkien', 395, 'not read');
const book3 = new Book('The Hobbit 3', 'J.R.R. Tolkien', 495, 'not read');
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
console.log(myLibrary);

const display = document.getElementById('book-display');
for(let i = 0; i < 9; i++){
    const div = document.createElement('div');
    div.id = i;
    div.style.cssText = "margin: 0; text-align: center";
    display.appendChild(div);
}
for(let i = 0; i < myLibrary.length; i++){
    const div = document.getElementById('' + i + '');
    div.innerHTML = '<p>'+ myLibrary[i].title +'</p>' + '<p>' + myLibrary[i].author + '</p>' + '<p>' + myLibrary[i].pages + '</p>' + '<p>' + myLibrary[i].read + '</p>';
}
myLibrary.forEach(function(book){
console.log(book);
})

function addBookToLibrary(){

}