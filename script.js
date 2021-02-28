let myLibrary = [];
const table = document.querySelector('[data-table]');
const addButton = document.querySelector('[data-add-button]');
const radio = document.getElementsByName('readit');
const yesRead = document.querySelector('[data-read]').value;
const notRead = document.querySelector('[data-not-read]').value;

addButton.addEventListener('click', addBookToLibrary);

document.addEventListener('click', function (e) {
    if (e.target && e.target.hasAttribute('data-delete')) {
        let delBtnIndex = e.target.getAttribute('data-delete')
        deleteThisBook(delBtnIndex);
    }
})



function Book(title, author, pages, readIt) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt;
    clearForm()
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
    newRow.setAttribute('data-row', `${libraryIndex}`)
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
    deleteButton.setAttribute('class', 'delete-button',);
    deleteButton.setAttribute('data-delete', `${libraryIndex}`);
    deleteButton.innerHTML = "delete";
    deleteEntry.appendChild(deleteButton);
    newRow.appendChild(deleteEntry);
    console.log(myLibrary)
    clearForm();
}

function deleteThisBook(x) {

    let dataRows = document.querySelectorAll('[data-row]')

    myLibrary.splice(x, 1);


    table.removeChild(dataRows[x]);




    for (var i = 0; i < (myLibrary.length) - 1; i++) {
        dataRows.forEach(row => {
            row.setAttribute('data-row', `${i}`)
            row.setAttribute('data-delete', `${i}`)
        })
    }

};






function clearForm() {
    document.querySelector('[data-title]').value = '';
    document.querySelector('[data-author]').value = '';
    document.querySelector('[data-pages]').value = '';
}
