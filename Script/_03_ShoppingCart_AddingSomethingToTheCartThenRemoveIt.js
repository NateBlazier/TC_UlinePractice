function _03_ShoppingCart_AddingSomethingToTheCartThenRemoveIt()
{
  // Step 1: Go to Uline and navigate to product
  Browsers.Item(btChrome).Run("https://www.uline.com/");
  Aliases.browser.BrowserWindow2.Maximize();
  Aliases.browser.pageUlineShippingBoxesShippingSu.linkAllproductslink.Click();
  Aliases.browser.pageUlineShippingBoxesShippingSu3.Wait();
  Aliases.browser.pageUlineShippingBoxesShippingSu3.textnodeAntiStatic.linkAntiStatic.Click();
  Aliases.browser.pageAntiStatic.Wait();
  Aliases.browser.pageAntiStatic.linkBubbleBags.textnodeBubbleBags.Click();
  Aliases.browser.pageAntiStaticBagsEsdBagsAndAnti.Wait();

  // Step 2: Add product to cart
  Aliases.browser.pageAntiStaticBagsEsdBagsAndAnti.linkCart20.Click();

  // Step 3: Verify item in cart preview
  aqObject.CheckProperty(Aliases.browser.pageAntiStaticBagsEsdBagsAndAnti.panelS18399, "contentText", cmpEqual, "S-18399\nUnit Price: $118.00");
  aqObject.CheckProperty(Aliases.browser.pageAntiStaticBagsEsdBagsAndAnti.linkLnkcartlink2.textnodeLblcartstatus2, "contentText", cmpEqual, "$118.00");
  aqObject.CheckProperty(Aliases.browser.pageAntiStaticBagsEsdBagsAndAnti.labelShoppingcartitems0Cusdescri, "contentText", cmpEqual, "Anti-Static Bubble Bags - Self-Seal, 24 x 24\"");

  // Step 4: Go to full cart page
  Aliases.browser.pageAntiStaticBagsEsdBagsAndAnti.linkLnkcartlink2.Click();
  aqObject.CheckProperty(Aliases.browser.pageUlineShoppingCart.formTheform.linkS18399, "contentText", cmpEqual, "S-18399");
  aqObject.CheckProperty(Aliases.browser.pageUlineShoppingCart.formTheform.linkAntiStaticBubbleBagsSelfSe, "contentText", cmpEqual, "Anti-Static Bubble Bags - Self-Seal, 24 x 24\" 75/carton");
  aqObject.CheckProperty(Aliases.browser.pageUlineShoppingCart.formTheform.cell, "contentText", cmpEqual, "$118.00/CT");
  aqObject.CheckProperty(Aliases.browser.pageUlineShoppingCart.formTheform.textnode11800, "contentText", cmpEqual, "$118.00");

  // Step 5: Remove item and verify cart is empty
  Browsers.Item(btChrome).Navigate("https://www.uline.com/Product/ViewCart");
  Aliases.browser.BrowserWindow2.Maximize();
  Aliases.browser.pageUlineShoppingCart.formTheform.submitbuttonActionRemovecartitem.ClickButton();
  aqObject.CheckProperty(Aliases.browser.pageUlineShoppingCart.formTheform.textnodeLblcartempty, "contentText", cmpEqual, "Your cart is currently empty.");
}
