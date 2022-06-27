import {listbox, others} from "../../cypress/fixtures/selectors.js";

beforeEach(function () {
    cy.visit('/')

});
it("OTHERS/DRAG AND DROP - User should be able to drag and drop an item to list ", function () {
    cy.get(others.popupadd).click();
    cy.get(others.othersDropdown).click();
    cy.get(others.drangAndDropBtn).click();
    cy.get(others.draggable1).click()
    //cy.get(others.dropZone1).drop()
})

it("DYNAMIC DATA LOADING - User should be able to get new users ", function () {
    cy.get(others.popupadd).click();
    cy.get(others.othersDropdown).click();
    cy.get(others.dynamicDataLoadingBtn).click()
    cy.get(others.getNewUserBtn).click()
    cy.wait(4500)
    cy.get(others.getNewUserBtn1).click()
    cy.wait(4000)
    cy.get(others.getNewUserBtn2).click()
    cy.wait(4000)
})
it("CHARTS DEMO - User should be able to see charts ", function () {
    cy.get(others.popupadd).click();
    cy.get(others.othersDropdown).click()
    cy.get(others.chartsDemo).click()
})