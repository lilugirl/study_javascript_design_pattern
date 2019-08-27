//类也可以
var CheckObject = function () {
  this.checkName = function () {
    console.log('检验姓名');
  }
  this.checkEmail = function () {
    console.log('检验邮箱');
  }
  this.checkPassword = function () {
    console.log('检验密码');
  }
}

var a = new CheckObject();
a.checkName();
a.checkEmail();
a.checkPassword();