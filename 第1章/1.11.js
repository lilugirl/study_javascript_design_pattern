//换一种方式使用方法
Function.prototype.addMethod = function (name, fn) {
  this.prototype[name] = fn;
  return this;
}
var Methods = function () {};
Methods.addMethod('checkName', function () {
  console.log('检验姓名');
  return this;
}).addMethod('checkEmail', function () {
  console.log('检验邮箱');
  return this;
});

var m = new Methods();
m.checkName().checkEmail();