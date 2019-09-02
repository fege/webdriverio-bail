import { When, Then } from "cucumber";
import { GooglePage } from "../pageObjects/googlePage";
import {expect} from "chai";

When(/^I open "([^"]*)"$/, function (url) {
  browser.url(url);
});


Then(/^I see "([^"]*)"$/, function (check) {
  const page = new GooglePage() 
  let result = page.searchform.getText()
  expect(result).to.be.eq(check);
  console.log("PASSED")
});