// 原型式继承
function inheritObject(o) {
  //声明一个过度函数对象
  function F() {

  }

  // 过度对象的原型继承父对象
  F.prototype = o;

  return new F();
}

var book = {
  name: 'js book',
  alikeBook: ['css book', 'html book']
}

var newBook = inheritObject(book);
console.log('newBook', newBook);
newBook.name = "ajax book";
newBook.alikeBook.push('ajax book');

var otherBook = inheritObject(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');
console.log('otherBook', otherBook);

// 值类型的属性被复制，引用类型的属性被公用