function extractImageData(page) {
  // Find all anchor elements containing images within tbody
  var anchors = page.FindElements("//tbody//a[img]");

  var imageDataArray = [];

  // Iterate through each anchor element
  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    var image = anchor.FindChild("tagName", "IMG", 1);
    var caption = anchor.FindChild("className", "caption", 1);

    var imageData = {
      href: anchor.getAttribute("href") || "",
      src: image ? image.getAttribute("src") : "",
      alt: image ? image.getAttribute("alt") : "",
      caption: caption ? caption.contentText : ""
    };

    imageDataArray.push(imageData);
  }

  // Log the extracted data as a JSON string
  Log.Message(JSON.stringify(imageDataArray, null, 2));

  return imageDataArray;
}


function Test_ExtractImageData() {
  // Navigate to the Uline homepage
  Browsers.Item(btChrome).Run("https://www.uline.com");

  // Obtain the browser and page objects
  var browser = Sys.Browser("chrome");
  var page = browser.Page("*uline.com*");
  page.Wait();

  // Extract image data
  var imageData = extractImageData(page);

  // Perform further validation or comparison with expected values as needed

  // Close the browser
  browser.Close();
}
