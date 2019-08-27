//可以链式添加吗
Function.prototype.addMethod = function (name, fn) {
  this[name] = fn;
  return this;
}

var methods = function () {};
methods.addMethod('checkName', function () {
  console.log('检验姓名');
  return this;
}).addMethod('checkEmail', function () {
  console.log('检验邮箱');
  return this;
});

methods.checkName().checkEmail();