//Task 1
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title
        this.author = author
        this.isbn = isbn
        this.copies = copies
    }
getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
}
updateCopies(quantity) {
    this.copies += quantity
}
}
//Test Case
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails())
book1.updateCopies(-1);
console.log(book1.getDetails())

//Task 2
class Borrower {
    constructor(name, borrowerId) {
        this.name = name
        this.borrowerId = borrowerId
        this.borrowedBooks = []
    }
borrowBook(book) {  
    this.borrowedBooks.push(book)
}
    
returnBook(book) {  
    this.borrowedBooks = this.borrowedBooks.filter(b => b !== book)
}
}
//Test Case
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks)
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks)

//Task 3
class Library {
    constructor() {
        this.books = []
        this.borrowers = []
    }
addBook(book) {
    this.books.push(book) 
}
listBooks() {
    this.books.forEach(book => {
        console.log(book.getDetails())
    })
}

//Task 4
addBorrower(borrower) {
    this.borrowers.push(borrower)
}
lendBook(borrowerId, isbn) {
    const book = this.books.find(b => b.isbn === isbn)
    if (book === undefined || book.copies === 0) {
        console.log("Book does not exist");
        return;
    }
    let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
    if (borrower === undefined) {
        console.log("Borrower not found")
        return
    }
    
    book.updateCopies(-1)
    borrower.borrowBook(book.title)
}
returnBook(borrowerId, isbn) {
    const book= this.books.find(b => b.isbn === isbn)
    if (book === undefined) {
        this.console.log("Book does not exist")
        return
    }
    const borrower =  this.borrowers.find (b => b.borrowerId === borrowerId)
    if (borrower === undefined) {
        this.console.log("Borrower not found")
    }

    book.updateCopies(1)
    borrower.returnBook(book.title)
}}
//Test Case for Task 3
const library = new Library();
library.addBook(book1);
library.listBooks()
//Test Case for Task 4
library.addBorrower(borrower1)
library.lendBook(201, 123456);
console.log(book1.getDetails())
console.log(borrower1.borrowedBooks)
//Test Case for Task 5
library.returnBook(201, 123456);
console.log(book1.getDetails())
console.log(borrower1.borrowedBooks)