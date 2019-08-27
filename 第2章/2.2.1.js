var Book = function (id, bookname, price) {
  this.id = id;
  this.bookname = bookname;
  this.price = price;
}

Book.prototype.display = function () {
  console.log('display this book: ' + this.bookname);
}

var book = new Book(10, '设计模式', 50);
book.display();

console.log('book', book);

console.log('Book', Book);