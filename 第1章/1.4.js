//对象的另一种形式
var CheckObject = function () {};
CheckObject.checkEmail = function () {
  console.log('检验姓名');
}

CheckObject.checkName = function () {
  console.log('检验邮箱');
}

CheckObject.checkPassword = function () {
  console.log('检验密码');
}

CheckObject.checkEmail();
CheckObject.checkName();
CheckObject.checkPassword();