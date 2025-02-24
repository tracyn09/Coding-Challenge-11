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