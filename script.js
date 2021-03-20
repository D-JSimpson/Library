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
    div.style.cssText = "margin: 0; text-align: center; border: 1px solid burlywood; border-radius: 10px";
    display.appendChild(div);
}
for(let i = 0; i < myLibrary.length; i++){
    const div = document.getElementById('' + i + '');
    if(myLibrary[i] !== ""){
    div.innerHTML = '<p>'+ myLibrary[i].title +'</p>' + '<p>' + myLibrary[i].author + '</p>' + '<p>' + myLibrary[i].pages + '</p>' + '<p>' + myLibrary[i].read + '</p>';
    }
}
myLibrary.forEach(function(book){
console.log(book);
})

function setRemoveButton(div){
    const button = document.createElement('button');
        button.innerText = 'REMOVE BOOK';
        button.id = div.id + 'r'; 
        button.addEventListener('click', function(){removeBookFromLibrary(div)});
        div.appendChild(button);
}

function setNewBookButton(div){
    const button = document.createElement('button');
        button.innerText = 'NEW BOOK';
        button.id = div.id + 'b'; 
        button.addEventListener('click', function(){addBookToLibrary(button.id, div);});
        div.appendChild(button);
        div.classList.toggle('button-center');
}

let displayChild = Array.from(display.children);
displayChild.forEach(function(div){ 
    if(div.children.length == 0){
        setNewBookButton(div);
    } else { 
        setRemoveButton(div);
        }
});

function makeBook(i){
    const div = document.getElementById('' + i + '');
    div.classList.toggle('button-center');
    div.innerHTML = '<p>'+ myLibrary[i].title +'</p>' + '<p>' + myLibrary[i].author + '</p>' + '<p>' + myLibrary[i].pages + '</p>' + '<p>' + myLibrary[i].read + '</p>';
}

function addBookToLibrary(id, div){
    console.log(div);
    let title = window.prompt("Enter Title: ");
    let author = window.prompt("Enter author: ");
    let pages = window.prompt("Enter page numbers: ");
    let pMod = pages % 1;
        while(pages % 1 !== 0){
            alert('please enter a valid number');
            pages = window.prompt("Enter page numbers: ");
            pMod = pages % 1;
        }
    let read = window.prompt("Have you read it?");
        while(read !== 'read' && read !== 'not read'){
            alert('please enter read or not read');
            read = window.prompt("Have you read it?");
        }
    let spot = id.substring(0,1);
    let book = new Book(title, author, pages, read);
    myLibrary[spot] = book;
    makeBook(spot);
    setRemoveButton(div);
}

function removeBookFromLibrary(div){
div.innerHTML = '';
setNewBookButton(div);
myLibrary[div.id] = '';
}
