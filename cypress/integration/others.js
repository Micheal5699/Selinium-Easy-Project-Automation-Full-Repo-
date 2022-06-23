import {listbox, others} from "../../cypress/fixtures/selectors.js";

beforeEach(function () {
    cy.visit('/')

});
it("OTHERS/DRAG AND DROP - I Should be able to Automate all Others fixtures ", function () {
    cy.get(others.popupadd).click();
    cy.get(others.othersDropdown).click();
    cy.get(others.drangAndDropBtn).click();
    cy.get(others.draggable1).click()
    //cy.get(others.dropZone1).drop()
})
it("DYNAMIC DATA LOADING - I Should be able to Automate all dynamic data loading fixtures ", function () {
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
it("CHARTS DEMO - I Should be able to Automate all charts demo fixtures ", function () {
    cy.get(others.popupadd).click();
    cy.get(others.othersDropdown).click()
    cy.get(others.chartsDemo).click()
})