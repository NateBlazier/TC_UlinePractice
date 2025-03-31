var page_SignIn = require("page_SignIn");

function _04_SignIn_UserSignin() {
  // Step 1: Navigate to Uline's sign-in page
  Browsers.Item(btChrome).Run("https://www.uline.com/SignIn/SignIn");

  const sEmail = "nblazier@gmail.com";
  const sPassword = "BestPasswordEver123!@#";

  // Create an instance of the page_SignIn object
  let signinPage = new page_SignIn();
  signinPage.signin(sEmail, sPassword);

  // Step 2: Define the XPath expression for the validation message
  var xpathExpression = "//span[contains(text(), 'Password must contain at least one number and one letter.')]";

  // Step 3: Wait for the validation message element to become available
  var validationMessageElement = Aliases.browser.pageUlineSignIn.WaitElement(xpathExpression, 5000); // Wait up to 5 seconds

  // Step 4: Verify the presence and content of the validation message
  if (validationMessageElement.Exists) {
    aqObject.CheckProperty(validationMessageElement, "contentText", cmpEqual, "Password must contain at least one number and one letter.");
    Log.Message("Password validation message is present and correct.");
  } else {
    Log.Warning("Password validation message is not present.");
  }
}
