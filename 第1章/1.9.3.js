//函数的祖先
Function.prototype.addMethod = function (name, fn) {
  this[name] = fn; //没懂


}

var methods = new Function();


methods.addMethod('checkName', function () {
  console.log('检验姓名');
});

methods.addMethod('checkEmail', function () {
  console.log('检验邮箱');
});

methods.checkName();
methods.checkEmail();