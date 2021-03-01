let myLibrary = [];
let createdRows = [];
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
document.addEventListener('click', function(e) {
    if (e.target && e.target.hasAttribute('data-read-it')) {
        changeReadIt(e);
    }
})



function Book(title, author, pages, readIt, delBtn) {
    //constructor

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt;
    this.delBtn = delBtn;

}

function addBookToLibrary() {
    let title = document.querySelector('[data-title]').value;
    let author = document.querySelector('[data-author]').value;
    let pages = document.querySelector('[data-pages]').value;
    let readIt = '';

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked)
            readIt = radio[i].value;
    }


    const newBook = new Book(title, author, pages, readIt);
    myLibrary.push(newBook);
    
    updateTable();
    

}

function updateTable() {
    
    clearTable();
    
    for (var i = 0; i < myLibrary.length; i++) {
        let newRow = document.createElement('tr');
        newRow.setAttribute('class', 'new-book-row')

        let newTitle = document.createElement('td');
        newTitle.innerHTML = myLibrary[i].title;

        let newAuthor = document.createElement('td');
        newAuthor.innerHTML = myLibrary[i].author;

        let newPages = document.createElement('td');
        newPages.innerHTML = myLibrary[i].pages;

        let newReadIt = document.createElement('td');
        let readItBtn = document.createElement('button');
        readItBtn.innerHTML = myLibrary[i].readIt;
        readItBtn.setAttribute('data-read-it','');
        newReadIt.appendChild(readItBtn);

        let newDelBtnTD = document.createElement('td');
        let newDelBtn = document.createElement('button');
        newDelBtn.innerHTML = 'Delete';
        newDelBtn.setAttribute('data-delete', `${i}`)
        newDelBtnTD.appendChild(newDelBtn);


        newRow.appendChild(newTitle);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newPages);
        newRow.appendChild(newReadIt);
        newRow.appendChild(newDelBtnTD);

        table.appendChild(newRow);
    }
    clearForm();
}

function deleteThisBook(x) {
    myLibrary.splice(x, 1);    
    updateTable();
};

function clearTable() {
    let tableRows = table.getElementsByClassName('new-book-row');
    while (tableRows.length > 0) {
        tableRows[0].parentNode.removeChild(tableRows[0]);
    }
}

function changeReadIt(e){
    if(e.target.innerHTML == 'Yes'){
        e.target.innerHTML = 'No'
    } else {
        e.target.innerHTML = 'Yes'
    }
}

function clearForm() {
    document.querySelector('[data-title]').value = '';
    document.querySelector('[data-author]').value = '';
    document.querySelector('[data-pages]').value = '';
}
