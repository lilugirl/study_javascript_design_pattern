// 子类型的原型对象-类式继承
// 类式继承
// 声明父类
function SuperClass() {
  this.supberValue = true;
  this.books = ['Js', 'html', 'css'];
}

// 为父类添加公有方法
SuperClass.prototype.getSuperValue = function () {
  return this.supberValue;
}

// 声明子类
function SubClass() {
  this.subValue = false;
}


// 继承父亲
SubClass.prototype = new SuperClass();

// 为子类添加公有方法
SubClass.prototype.getSubValue = function () {
  return this.subValue;
}


var instance = new SubClass();
var instance2 = new SubClass();
console.log('instance2.books', instance2.books);
instance.books.push('设计模式');
console.log('instance2.books', instance2.books);
console.log('instance.getSuperValue()', instance.getSuperValue());
console.log('instance.getSubValue()', instance.getSubValue());

console.log('instance instanceof SuperClass', instance instanceof SuperClass);
console.log('instance instanceof SubClass', instance instanceof SubClass);
console.log('SubClass instanceof SuperClass', SubClass instanceof SuperClass);
console.log('instance instanceof Object', instance instanceof Object);