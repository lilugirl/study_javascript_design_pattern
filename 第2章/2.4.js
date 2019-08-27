// 单继承 属性复制
var extend = function (target, source) {
  //遍历源对象中的属性
  for (var property in source) {
    // 将源对象中的属性复制到目标对象中
    target[property] = source[property];
  }
  // 返回目标对象
  return target;
}

var book = {
  name: 'Js 设计模式',
  alike: ['css', 'html', 'js']
}

var anotherBook = {
  color: 'blue'
}

extend(anotherBook, book);
anotherBook.alike.push('ajax');
anotherBook.name = 'php';
console.log('anotherBook', anotherBook);
console.log('book', book);