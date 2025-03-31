//https://www.uline.com/SignIn/SignIn

function page_SignIn() {
  this.input_Email    = () => Aliases.browser.pageUlineSignIn.formSigninform.emailinputEmailIsRequired
  this.input_Password = () => Aliases.browser.pageUlineSignIn.formSigninform.passwordboxPassword;
  this.button_Login   = () => Aliases.browser.pageUlineSignIn.formSigninform.submitbuttonSignIn;

  this.signin = function(sEmail, sPassword) {
    this.input_Email().SetText(sEmail);
    this.input_Password().SetText(sPassword);
    this.button_Login().Click();
  };
}
module.exports = page_SignIn;