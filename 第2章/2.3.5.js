// 寄生式继承
// 声明基对象
function inheritObject(o) {
  //声明一个过度函数对象
  function F() {

  }

  // 过度对象的原型继承父对象
  F.prototype = o;

  return new F();
}

function createBook(obj) {
  // 通过原型继承方式创建新对象
  var o = new inheritObject(obj);

  //拓展新对象
  o.getName = function () {
    console.log('name', this.name);
  }

  // 返回拓展后的新对象
  return o;
}

var book = {
  name: 'js book',
  alikeBook: ['css book', 'html book']
}

var newBook = createBook(book);
console.log('newBook', newBook);
newBook.name = "ajax book";
newBook.alikeBook.push('ajax book');
newBook.getName();

var otherBook = createBook(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');
console.log('otherBook', otherBook);
otherBook.getName();

// 值类型的属性被复制，引用类型的属性被公用