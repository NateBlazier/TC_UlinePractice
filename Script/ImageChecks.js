// ImageChecks.js

function checkImagesLoaded(page) {
  let images = page.EvaluateXPath("//img");

  if (!images || images.length === 0) {
    Log.Warning("No images found on the page.");
    return;
  }

  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    let complete = img.getAttribute("complete");
    let naturalWidth = img.getAttribute("naturalWidth");

    if (complete !== "true" || parseInt(naturalWidth) <= 0) {
      Log.Error("Broken image detected", img.getAttribute("src"));
    } else {
      Log.Message("Image OK", img.getAttribute("src"));
    }
  }
}
module.exports.checkImagesLoaded = checkImagesLoaded;


function checkAllImageStatusCodes(page) {
  let images = page.EvaluateXPath("//img");

  if (!images || images.length === 0) {
    Log.Warning("No images found on the page.");
    return;
  }

  // Retrieve the base URL of the page
  let baseUrl = page.contentDocument.location.href;
  if (baseUrl.endsWith("/")) {
    // Remove trailing slash if present
    baseUrl = baseUrl.slice(0, -1); 
  }

  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    let src = img.getAttribute("src");

    // Skip images without a source
    if (!src) {
      Log.Warning(`Image at index ${i} has no 'src' attribute.`);
      continue;
    }

    // Handle relative URLs
    if (!src.startsWith("http")) {
      if (!src.startsWith("/")) {
        src = "/" + src; // Ensure the relative path starts with a slash
      }
      src = baseUrl + src;
    }

    // Perform an HTTP request to check the status code
    let xhr = getActiveXObject("MSXML2.XMLHTTP");
    try {
      xhr.open("HEAD", src, false);
      xhr.send();
      let status = xhr.status;

      if (status >= 200 && status < 300) {
        Log.Message(`Image loaded successfully: ${src}`);
      } else {
        Log.Error(`Image returned status code ${status}: ${src}`);
      }
    } catch (error) {
      Log.Error(`Error checking image at ${src}: ${error.message}`);
    }
  }
}
module.exports.checkAllImageStatusCodes = checkAllImageStatusCodes;


function checkTheExpectedCountOfImagesInAnArea(page, sLocator_areaWithImages, iExpectedCount) {
  // Use FindElements to retrieve all img elements within tbody tags
  var images = page.FindElements(sLocator_areaWithImages);

  // Get the actual count of img elements found
  var actualCount = images.length;

  // Compare the actual count with the expected count
  if (actualCount === iExpectedCount) {
    Log.Message("The number of images matches the expected count: " + iExpectedCount);
  } else {
    Log.Error("Mismatch in image count. Expected: " + expectedCount + ", but found: " + actualCount);
  }
}
module.exports.checkTheExpectedCOuntOfImagesInAnArea = checkTheExpectedCOuntOfImagesInAnArea;

