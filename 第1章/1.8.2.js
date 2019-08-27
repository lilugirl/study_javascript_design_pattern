var CheckObject = function () {};
CheckObject.prototype = {
  checkName: function () {
    console.log('检验姓名');
    return this;
  },
  checkEmail: function () {
    console.log('检验邮箱');
    return this;
  },
  checkPassword: function () {
    console.log('检验密码');
    return this;
  }

}

var a = new CheckObject();
a.checkName().checkEmail().checkPassword();