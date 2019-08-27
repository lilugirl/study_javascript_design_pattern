//函数的祖先
Function.prototype.checkEmail = function () {
  console.log('检验邮箱');
}

var f = function () {};
f.checkEmail();


var f2 = new Function();
f2.checkEmail();