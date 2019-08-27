// 私有属性与私有方法，特权方法，对象共有属性和对象共有方法，构造器
var Book = function (id, bookname, price) {
  // 私有属性
  var num = 1;

  // 私有方法
  function checkId() {

  };

  //特权方法
  this.getName = function () {};
  this.getPrice = function () {};
  this.setName = function () {};
  this.setPrice = function () {};

  // 对象共有属性
  this.id = id;
  this.bookname = bookname;
  this.price = price;

  // 对象共有方法
  this.copy = function () {}

  // 构造器
  this.setName(name);
  this.setPrice(price);
}

// 类静态共有属性（对象不能访问）
Book.isChinese = true;

// 类静态共有方法 (对象不能访问)
Book.resetTime = function () {
  console.log('new Time');
}

Book.prototype = {
  //共有属性
  isJSBook: false,
  //公有方法
  idsplay: function () {
    console.log('display this book: ' + this.bookname);
  }
}



var book = new Book(10, '设计模式', 50);
console.log('book.num', book.num);
console.log('book.isJSBook', book.isJSBook);
console.log('book.id', book.id);
console.log('book.isChinese', book.isChinese);
console.log('book.display', book.idsplay());
console.log('Book.isChinese', Book.isChinese);
console.log('Book.resetTime', Book.resetTime());
console.log('Book.num', Book.num);