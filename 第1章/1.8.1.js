//方法还可以这样用
var CheckObject = {
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


CheckObject.checkName().checkEmail().checkPassword();