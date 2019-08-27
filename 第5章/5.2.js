// 抽象工厂方法
var VehicleFactory = function (subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    function F() {};

    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]();
    //将子类 constructor 指向子类
    subType.constructor = subType;
    // 子类原型继承父类
    subType.prototype = new F();
  } else {
    throw new Error('未创建该抽象类');
  }
}