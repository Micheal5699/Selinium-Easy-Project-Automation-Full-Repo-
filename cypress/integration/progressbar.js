import {progressbar} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on progress bar page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
    it("PROGRESS BAR - User Should be able to download progress bar", function () {
        cy.get(progressbar.popupadd).click();
        cy.get(progressbar.progressBarBtn).click();
        cy.get(progressbar.jQuery).click();
        cy.get(progressbar.jQueryDowbloadProgressBar).click()
        cy.wait(10000)
        cy.get(progressbar.closeBtn).click()
    })

    it("BOOTSTRAP PROGRESS BAR - User Should be able to download progress bar", function () {
        cy.get(progressbar.popupadd).click();
        cy.get(progressbar.progressBarBtn).click();
        cy.get(progressbar.bootstrapProgressBar).click()
        cy.get(progressbar.downloadBtn).click()
        cy.wait(21000)
})

it("DRAG AND DROP SLIDERS - User Should be able to change value to 50", function () {
    cy.get(progressbar.popupadd).click();
    cy.get(progressbar.progressBarBtn).click();
    cy.get(progressbar.dragAndDropSliders).click()
    cy.get(progressbar.defaultValue1).invoke('val','50').trigger("change")
})

it("DRAG AND DROP SLIDERS - User Should be able to change value to 71", function () {
    cy.get(progressbar.popupadd).click();
    cy.get(progressbar.progressBarBtn).click();
    cy.get(progressbar.dragAndDropSliders).click()
    cy.get(progressbar.defaultValue2).invoke('val','71').trigger("change")
})

it("DRAG AND DROP SLIDERS - User Should be able to change value to 68", function () {
    cy.get(progressbar.popupadd).click();
    cy.get(progressbar.progressBarBtn).click();
    cy.get(progressbar.dragAndDropSliders).click()
    cy.get(progressbar.defaultValue3).invoke('val','68').trigger("change")
})

it("DRAG AND DROP SLIDERS - User Should be able to change value to 31", function () {
    cy.get(progressbar.popupadd).click();
    cy.get(progressbar.progressBarBtn).click();
    cy.get(progressbar.dragAndDropSliders).click()
    cy.get(progressbar.defaultValue4).invoke('val','31').trigger("change")
})

it("DRAG AND DROP SLIDERS - User Should be able to change value to 86", function () {
    cy.get(progressbar.popupadd).click();
    cy.get(progressbar.progressBarBtn).click();
    cy.get(progressbar.dragAndDropSliders).click()
    cy.get(progressbar.defaultValue5).invoke('val','86').trigger("change")
})

it("DRAG AND DROP SLIDERS - User Should be able to change value to 98", function () {
    cy.get(progressbar.popupadd).click();
    cy.get(progressbar.progressBarBtn).click();
    cy.get(progressbar.dragAndDropSliders).click()
    cy.get(progressbar.defaultValue6).invoke('val','98').trigger("change")
})
})