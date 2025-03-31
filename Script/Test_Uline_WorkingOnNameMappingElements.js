function Test_SearchProduct() {
  Browsers.Item(btChrome).Run("https://www.uline.com/");

  let page = Aliases.browser.page;  
  
  let input_searchBox = page.FindElement("//input[@id='txtProductSearch']");
  input_searchBox.SetText("Shipping Boxes");

  let button_go = page.FindElement("//input[@id='uhGo']");
  button_go.Click();

  page.Wait();
  
  let resultsHeader = page.FindElement("//h1[contains(text(), 'Boxes')]");
 
  //only listing it out this way for learning and review
  let Object          = resultsHeader;
  let PropertyName    = "Exists";
  let ComparisonType  = cmpEqual;
  let ExpectedValue   = true
  aqObject.CheckProperty(Object, PropertyName, ComparisonType, ExpectedValue);
  
  //*[@id="tblChartBody"]//tbody//tr
  
  browser.Close();
  
  Log.Message("Test completed successfully.");
  
}

