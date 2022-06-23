import {datepickers} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on Date pickers page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
    it("DATE PICKERS - I Should be able to Automate Date picker ", function () {
        cy.get(datepickers.popupadd).click();
        cy.get(datepickers.datePickersBtn).click();
        cy.get(datepickers.bootStrap).click();
        cy.get(datepickers.dateValidation).click();
        cy.get(datepickers.dayBtn).click();
        cy.get(datepickers.dateToStart).click();
        cy.get(datepickers.dayToStart).click();
        cy.get(datepickers.dateToEnd).click();
        cy.get(datepickers.dayToEnd).click();

    })
    it("JQUERY - I Should be able to Automate JQuery ", function () {
        cy.get(datepickers.popupadd).click();
        cy.get(datepickers.datePickersBtn).click();
        cy.get(datepickers.jQueryBtn).click();
        cy.get(datepickers.fromBtn).click();
        cy.get(datepickers.previousBtn).click();
        cy.get(datepickers.nextBtn).click();
        cy.get(datepickers.fromDate).click();
        cy.get(datepickers.toBtn).click();
        cy.get(datepickers.toPreviousBtn).click();
        cy.get(datepickers.toNextBtn).click();
        cy.get(datepickers.toDate).click();
})
})