// 创建即继承--构造函数继承
// 构造函数式继承
// 声明父类
function SuperClass(id) {
  // 引用类型共有属性
  this.books = ['Js', 'html', 'css'];

  // 值类型共有属性
  this.id = id;
}

// 父类声明原型方法
SuperClass.prototype.showBooks = function () {
  console.log('this.books', this.books);

}

// 声明子类
function SubClass(id) {
  // 继承父类
  SuperClass.call(this, id);
}


// 创建第一个类的实例
var instance1 = new SubClass(10);

// 创建第二个类的实例
var instance2 = new SubClass(11);


instance1.books.push('设计模式');
console.log('instance1.books', instance1.books);
console.log('instance2.books', instance2.books);
console.log('instance1.showBooks', instance1.showBooks());