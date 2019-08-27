// 图书安全类
var Book = function (title, name, type) {
  // 判断执行过程中 this是否是当前这个对象（如果是说明是用new创建的）

  if (this instanceof Book) {
    this.title = title;
    this.name = name;
    this.type = type;

    //否则重新创建这个对象
  } else {
    return new Book(title, name, type);
  }

}

//实例化一本书
var book = Book('Javascript', '2014', 'js');

console.log('book', book);
console.log('window.title', window.title);
console.log('window.name', window.name);
console.log('window.type', window.type);