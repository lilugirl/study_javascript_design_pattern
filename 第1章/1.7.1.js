//一个检测类
var CheckObject = function () {};
CheckObject.prototype.checkName = function () {
  console.log('检验姓名');
}

CheckObject.prototype.checkEmail = function () {
  console.log('检验邮箱');
}

CheckObject.prototype.checkPassword = function () {
  console.log('检验密码');
}

var a = new CheckObject();
a.checkName();
a.checkEmail();
a.checkPassword();