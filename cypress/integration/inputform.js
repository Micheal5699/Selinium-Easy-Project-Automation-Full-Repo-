import {inputforms} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on the input forms page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
it("INPUT FORMS - I Should be able to Automate all Select form demo", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.selectform).click();
  cy.get(inputforms.emptyfield).type(inputforms.messagetext);
  cy.get(inputforms.showmessage).click();
  cy.get(inputforms.entervalue).type(inputforms.messagetext1);
  cy.get(inputforms.entervalue2).type(inputforms.messagetext2);
  cy.get(inputforms.total).click();
})

it("CHECK BOX DEMO - I Should be able to automate all checkbox demo fixtures", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.checkboxdemoBtn).click();
  cy.get(inputforms.checkageBtn).click();
  cy.get(inputforms.checkallBtn).click();
  cy.get(inputforms.uncheckBtn).click();
})

it("RADIO BUTTON DEMO - I Should be able to automate all radio button demo fixtures", function () {
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

it("AJAX FORMS SUBMIT - I Should be able to automate all ajax form submit fixtures", function () {
    cy.get(inputforms.popupadd).click();
    cy.get(inputforms.inputformsdropdown).click();
    cy.get(inputforms.ajaxFormSubmitBtn).click();
    cy.get(inputforms.emptyField).type(inputforms.nameText);
    cy.get(inputforms.descriptionEmptyField).type(inputforms.descriptionText);
    cy.get(inputforms.submitBtn).click();
})

it("INPUT FORMS SUBMIT - I Should be able to automate all inputform submit fixtures", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.inputFormSubmit).click();
  cy.get(inputforms.firstNameEmptyField).type(inputforms.firstNameText);
  cy.get(inputforms.lastNameEmptyField).type(inputforms.lastNameText);
  cy.get(inputforms.emailEmptyField).type(inputforms.emailText);
  cy.get(inputforms.phoneNumberEmptyField).type(inputforms.phoneNumberText);
  cy.get(inputforms.adressEmptyField).type(inputforms.addressText);
  cy.get(inputforms.cityEmptyField).type(inputforms.cityText);
  cy.get(inputforms.stateDropdown).select('Alaska');
  cy.get(inputforms.zipCode).type(inputforms.zipCodeNumber);
  cy.get(inputforms.websiteDomain).type(inputforms.websiteDomainText);
  cy.get(inputforms.yesBtn).click();
  cy.get(inputforms.noBtn).click();
  cy.get(inputforms.descriptionBtn).type(inputforms.descriptionText);
  cy.get(inputforms.sendBtn).click();
})
it("JQUERY - I Should be able to automate Jquery fixtures", function () {
  cy.get(inputforms.popupadd).click();
  cy.get(inputforms.inputformsdropdown).click();
  cy.get(inputforms.jQueryBtn).click();
  cy.get(inputforms.selectCountryBtn).click();
  cy.get(inputforms.countrySelected).click();
  cy.get(inputforms.selectStateBtn).type('Arizona'+'{enter}');
  cy.get(inputforms.selectStateBtn).type('Florida'+'{enter}');
  cy.get(inputforms.selectStateBtn).type('Washington'+'{enter}');
  //cy.get(inputforms.usOutlyingTerritory).click();
})
})