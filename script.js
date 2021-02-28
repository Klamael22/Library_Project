let myLibrary = [];
const table = document.querySelector('[data-table]');
const addButton = document.querySelector('[data-add-button]');
const radio = document.getElementsByName('readit');
const yesRead = document.querySelector('[data-read]').value;
const notRead = document.querySelector('[data-not-read]').value;
const selectTD = document.getElementsByTagName('td');
const deleteBtn = selectTD.getElementsByTagName('button');
addButton.addEventListener('click', addBookToLibrary);
deleteBtn.addEventListener('click', clearForm)

function Book(title, author, pages, readIt) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt;
    //clearForm()
}

function addBookToLibrary() {
    
    title = document.querySelector('[data-title]').value;
    author = document.querySelector('[data-author]').value;
    pages = document.querySelector('[data-pages]').value;
    readIt = '';
    
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked)
            readIt = radio[i].value;
    }


    const newBook = new Book(title, author, pages, readIt);
    myLibrary.push(newBook);
    
    createNewRow(myLibrary);
}

function createNewRow() {

    let libraryLength = myLibrary.length;
    let libraryIndex = libraryLength - 1;

    let newRow = document.createElement('tr');
    table.appendChild(newRow);

    let newTitle = document.createElement('td');
    newTitle.innerHTML = myLibrary[libraryIndex].title;
    newRow.appendChild(newTitle);

    let newAuthor = document.createElement('td');
    newAuthor.innerHTML = myLibrary[libraryIndex].author;
    newRow.appendChild(newAuthor);

    let newPages = document.createElement('td');
    newPages.innerHTML = myLibrary[libraryIndex].pages;
    newRow.appendChild(newPages);

    let newReadIt = document.createElement('td');
    newReadIt.innerHTML = myLibrary[libraryIndex].readIt;
    newRow.appendChild(newReadIt);

    let deleteEntry = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "delete";
    deleteEntry.appendChild(deleteButton);
    newRow.appendChild(deleteEntry);

    clearForm();
}

function clearForm() {
    document.querySelector('[data-title]').value = '';
    document.querySelector('[data-author]').value = '';
    document.querySelector('[data-pages]').value = '';
}
