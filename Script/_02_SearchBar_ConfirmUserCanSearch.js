function _02_SearchBar_ConfirmUserCanSearch() {
  
  //Step 1: Open the browser and navigate to Uline's landing page.
  Browsers.Item(btChrome).Run("https://www.uline.com/");
  let browser = Sys.Browser("chrome");
  let page = browser.Page("*uline.com*");
  page.Wait();

  //Step 2: Search for "Shipping Boxes" in the text area.
  let input_searchBox = page.FindElement("//input[@id='txtProductSearch']");
  input_searchBox.SetText("Shipping Boxes");

  //Step 3: Click on the Go Button and wait for the page to fully load
  let button_go = page.FindElement("//input[@id='uhGo']");
  button_go.Click();
  page.Wait();
  
  //Step 4: Confirm User has navigated to the correct page by confirming the expected Title of "BOXES".
  let resultsHeader = page.FindElement("//h1[contains(text(), 'Boxes')]");
  let Object          = resultsHeader;
  let PropertyName    = "Exists";
  let ComparisonType  = cmpEqual;
  let ExpectedValue   = true
  aqObject.CheckProperty(Object, PropertyName, ComparisonType, ExpectedValue);
  
  //Step 5:  Close the browser.  
  browser.Close();
  Log.Message("Test completed successfully.");
  
}
                    
                   
