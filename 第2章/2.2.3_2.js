// y有时候我们经常将类的静态变量通过闭包实现。
var Book = (function () {
  // 静态私有变量
  var bookNum = 0;

  // 静态私有方法
  function checkBook(name) {

  };

  // 创建类
  function _book(newId, newName, newPrice) {
    // 私有变量
    var name, price;
    //私有方法
    function checkID(id) {

    }

    //特权方法
    this.getName = function () {};
    this.getPrice = function () {};
    this.setName = function () {};
    this.setPrice = function () {};

    // 对象共有属性
    this.id = newId;
    this.bookname = newName;
    this.price = newPrice;

    // 对象共有方法
    this.copy = function () {};
    bookNum++;
    console.log('bookNum', bookNum);
    if (bookNum > 1) {
      throw new Error('我们仅出售1本书');
    }
    // 构造器
    this.setName(name);
    this.setPrice(price);
  }

  // 构造圆形
  _book.prototype = {
    //静态共有属性
    isJSBook: false,
    display: function () {
      console.log('display this book: ' + this.bookname);
    }
  }

  // 返回类
  return _book;


})();



Book.prototype = {
  //静态共有属性
  isJSBook: false,
  //公静态有方法
  idsplay: function () {
    console.log('display this book: ' + this.bookname);
  }
}



var book = new Book(10, '设计模式', 50);
// var book2 = new Book(11, '设计模式', 54);
console.log('book.bookNum', book.bookNum);
console.log('book.isJSBook', book.isJSBook);
console.log('book.id', book.id);
console.log('book.isChinese', book.isChinese);
console.log('book.display', book.idsplay());
console.log('Book.isChinese', Book.isChinese);