function Purhase_Item()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btFirefox).Run("http://localhost:88/shoppingcart/login.php");
  //Clicks at point (98, 15) of the 'textboxLoginEmail' object.
  Aliases.browser.pageSignUpLoginForm.form.panelFieldWrap.textboxLoginEmail.Click(98, 15);
  //Sets the text 'test@test.com' in the 'textboxLoginEmail' text editor.
  Aliases.browser.pageSignUpLoginForm.form.panelFieldWrap.textboxLoginEmail.SetText("andrew@yahoo.com");
  OCR.Recognize(Aliases.browser.pageSignUpLoginForm.form.panelFieldWrap2.passwordboxLoginPassword).BlockByText("Password").Click();
  //Sets the text 'test' in the 'passwordboxLoginPassword' text editor.
  Aliases.browser.pageSignUpLoginForm.form.panelFieldWrap2.passwordboxLoginPassword.SetText("test");
  //Clicks the 'buttonLogIn' control.
  Aliases.browser.pageSignUpLoginForm.form.buttonLogIn.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageAwesomeShoppingStoreProducts.Wait();
  //Clicks the 'buttonAddToCart' button.
  Aliases.browser.pageAwesomeShoppingStoreProducts.buttonAddToCart.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageAwesomeShoppingStoreViewCart.Wait();
  //Clicks the 'textboxSubmit' button.
  Aliases.browser.pageAwesomeShoppingStoreViewCart.panelContainer.textboxSubmit.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageCheckout.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageCheckout.form.textnodeTotal599Usd object equals 'Total $599 USD'.
  aqObject.CheckProperty(Aliases.browser.pageCheckout.form.textnodeTotal599Usd, "contentText", cmpEqual, "Total $599 USD");
  //Clicks the 'Logout (current)' item of the 'navbarAwesomeShoppingStore' bar.
  Aliases.browser.pageCheckout.navbarAwesomeShoppingStore.ClickItem("Logout (current)");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSignUpLoginForm.Wait();
  //Clicks the 'BrowserWindow' control.
  Aliases.browser.BrowserWindow.Close();
}

Given("I have I have navigated to the Shopping Cart URL", function (){
  throw new NotImplementedError();
});

Given("I input test@test.com into the username field", function (){
  throw new NotImplementedError();
});

Given("I input test into the password field", function (){
  throw new NotImplementedError();
});

Given("I click the login button", function (){
  throw new NotImplementedError();
});

Then("the user test@test.com should successfully be logged onto the Shopping Cart", function (){
  throw new NotImplementedError();
});
