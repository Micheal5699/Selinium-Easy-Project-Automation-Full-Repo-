import {inputforms} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on the input forms page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
it("INPUT FORMS/SIMPLE FORM DEMO - should be able to type and show message ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.selectform).click();
  cy.get(inputforms.emptyfield).type(inputforms.messagetext);
  cy.get(inputforms.showmessage).click()
});

it("INPUT FORMS/SIMPLE FORM DEMO - should be able to get a value for A and B  ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.selectform).click();
  cy.get(inputforms.entervalue).type(inputforms.messagetext1);
  cy.get(inputforms.entervalue2).type(inputforms.messagetext2);
  cy.get(inputforms.total).click();
})

it("CHECK BOX DEMO - Should be able to click on single checkbox", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.checkboxdemoBtn).click();
})

  it("CHECK BOX DEMO - Should be able to click on all multiple checkbox ", function () {
    cy.get(inputforms.popupadd).click();
    cy.get(inputforms.inputformsdropdown).click();
    cy.get(inputforms.checkboxdemoBtn).click();
    cy.get(inputforms.checkageBtn).click();
    cy.get(inputforms.checkallBtn).click();
    cy.get(inputforms.uncheckBtn).click();
})

it("RADIO BUTTON DEMO - User should be able to choose gender, and age group and get their values ", function () {
    cy.get(inputforms.popupadd).click();
    cy.get(inputforms.inputformsdropdown).click();
    cy.get(inputforms.radioBtn).click();
    cy.get(inputforms.femaleBtn).click();
    cy.get(inputforms.maleBtn).click();
    cy.get(inputforms.getCheckValueBtn).click();
    cy.get(inputforms.sexFemaleBtn).click();
    cy.get(inputforms.sexMaleBtn).click();
    cy.get(inputforms.ageGroupBtn1).click();
    cy.get(inputforms.ageGroupBtn2).click();
    cy.get(inputforms.ageGroupBtn3).click();
    cy.get(inputforms.getValueBtn).click();
})

it("SELECT DROPDOWN LIST - User should be able to select a day", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.selectDropdownListBtn).click()
  cy.get(inputforms.selectDayDropdown).select('Friday')
})

it("SELECT DROPDOWN LIST - User should be able to select multiple list and get the option selected", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.selectDropdownListBtn).click()
  cy.get(inputforms.selectState).click()
  cy.get(inputforms.firstSelectedBtn).click()
  cy.get(inputforms.getAllSelectedBtn).click()
})

it("INPUT FORMS SUBMIT - User should be able to click and type in first name ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.firstNameEmptyField).type(inputforms.firstNameText);
})

it("INPUT FORMS SUBMIT - User should be able to click and type in last name ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();  
  cy.get(inputforms.lastNameEmptyField).type(inputforms.lastNameText);
})

it("INPUT FORMS SUBMIT - User should be able to click and type in email address ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.emailEmptyField).type(inputforms.emailText);
})

it("INPUT FORMS SUBMIT - User should be able to input phone number ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.phoneNumberEmptyField).type(inputforms.phoneNumberText);
})

it("INPUT FORMS SUBMIT - User should be able to input address ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.adressEmptyField).type(inputforms.addressText);
})

it("INPUT FORMS SUBMIT - User should be able to click and input a city ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.cityEmptyField).type(inputforms.cityText);
})

it("INPUT FORMS SUBMIT - User should be able to select a state ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.stateDropdown).select('Alaska');
})

it("INPUT FORMS SUBMIT - User should be able to input a zip code number ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.zipCode).type(inputforms.zipCodeNumber);
})

it("INPUT FORMS SUBMIT - User should be able to input a website and specify hostage ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.websiteDomain).type(inputforms.websiteDomainText);
  cy.get(inputforms.yesBtn).click();
  cy.get(inputforms.noBtn).click();
})

it("INPUT FORMS SUBMIT - User should be able to type in a description ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.descriptionBtn).type(inputforms.descriptionText);
})

it("INPUT FORMS SUBMIT - User should be able send form ", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.sendBtn).click();
})

it("AJAX FORMS SUBMIT - User should be able to input name, comment and click on the submit button", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.ajaxFormSubmitBtn).click();
  cy.get(inputforms.emptyField).type(inputforms.nameText);
  cy.get(inputforms.descriptionEmptyField).type(inputforms.descriptionText);
  cy.get(inputforms.submitBtn).click();
})

it("JQUERY SELECT DROPDOWN - User should be able to type and select a country", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.jQueryBtn).click();
  cy.get(inputforms.selectCountryBtn).click();
  cy.get(inputforms.countrySelected).click();
})

it("JQUERY SELECT DROPDOWN - User should be able to type and select multiple a state", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.jQueryBtn).click();
  cy.get(inputforms.selectStateBtn).type('Arizona'+'{enter}');
  cy.get(inputforms.selectStateBtn).type('Florida'+'{enter}');
  cy.get(inputforms.selectStateBtn).type('Washington'+'{enter}')
})

it("JQUERY SELECT DROPDOWN - User should be able to select outlying territory", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.jQueryBtn).click();
  cy.get(inputforms.selectUsOutliningTerritory).type('American Samoa'+'{enter}')
})

it("JQUERY SELECT DROPDOWN - User should be able to select a file", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.jQueryBtn).click();
  cy.get(inputforms.CategoryDropDown).select('Java')
})
  })