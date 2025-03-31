// Import the ImageChecks module
var ImageChecks = require("ImageChecks");

function Test_LandingPage_CheckImages() {
  
  //Step 1: Opens the Browser and navigate to uline.com
  Browsers.Item(btChrome).Run("https://www.uline.com");
  let browser = Sys.Browser("chrome");
  let page = browser.Page("*uline.com*");
  page.Wait();
  
  //Step 2: Check for the expected number of images displayed on the landingPage within the main content area id="divContent" 
  let sLocator_areaWithImages = "//tbody//img[@src]";
  let iExpectedCount = 13;
  ImageChecks.checkTheExpectedCountOfImagesInAnArea(page, sLocator_areaWithImages, iExpectedCount)
  
  //Step 3: Checking The status code of all the images to make sure there are no brocken ones.
    // There are many ways we could do this... like screenshot comparisons 
    // I would normaly want to check all the expected images individually... 
    //but I wanted to call a imported function with testcompelete to see how that might work. 
  ImageChecks.checkAllImageStatusCodes(page);
  
  //Step 4: Close the browser.
  browser.Close();
  Log.Message("Test completed successfully.");
}

