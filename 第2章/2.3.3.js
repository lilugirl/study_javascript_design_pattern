// 组合式继承
// 声明父类
function SuperClass(name) {
  // 引用类型共有属性
  this.books = ['Js', 'html', 'css'];

  // 值类型共有属性
  this.name = name;
}

// 父类原型共有方法
SuperClass.prototype.showBooks = function () {
  console.log('this.books', this.books);

}

// 声明子类
function SubClass(name, time) {
  // 构造函数式继承父类name 属性
  SuperClass.call(this, name);

  // 子类中新增共有属性
  this.time = time;
}

// 类式继承 子类原型继承父类
SubClass.prototype = new SuperClass();

// 子类原型方法
SubClass.prototype.getTime = function () {
  console.log(this.time);
}
// 创建第一个类的实例
var instance1 = new SubClass('JS Book', 2014);

// 创建第二个类的实例
var instance2 = new SubClass('HTML', 1999);


instance1.books.push('设计模式');
console.log('instance1.books', instance1.books);
console.log('instance2.books', instance2.books);
instance1.showBooks();
instance2.showBooks();
instance1.getTime();
instance2.getTime();