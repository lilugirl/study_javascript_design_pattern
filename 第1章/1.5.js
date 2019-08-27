//真假对象
var CheckObject = function () {
  return {
    checkName: function () {
      console.log('检验姓名');
    },
    checkEmail: function () {
      console.log('检验邮箱');
    },
    checkPassword: function () {
      console.log('检验密码');
    }
  }
}

var a = CheckObject();
a.checkName();
a.checkEmail();
a.checkPassword();