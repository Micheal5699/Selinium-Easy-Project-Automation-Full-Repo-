import {alertsAndModals} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on alert and modals page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
    it("ALERTS AND MODALS/BOOTSTRAP ALERT - I Should be able to automate all fixtures under alerts and modals", function () {
        cy.get(alertsAndModals.popupadd).click();
        cy.get(alertsAndModals.alertsAndModalsBtn).click();
        cy.get(alertsAndModals.bootStrapAlerts).click();
        cy.get(alertsAndModals.autoClosableSuccMsg).click();
        cy.get(alertsAndModals.normSuccMsg).click();
        cy.get(alertsAndModals.closeNormalSuccMsgBtn).click();
        cy.get(alertsAndModals.autoClosableWarningBtn).click();
        cy.get(alertsAndModals.normalWarnBtn).click();
        cy.get(alertsAndModals.closeNormalWarnBtn).click();
        cy.get(alertsAndModals.autoDanBtn).click();
        cy.get(alertsAndModals.normalDanMsg).click();
        cy.get(alertsAndModals.closeNormalDanMsgBtn).click();
        cy.get(alertsAndModals.autoInfoMsg).click();
        cy.get(alertsAndModals.normMsgInfo).click();
        cy.get(alertsAndModals.closeNormMsgInfo).click();
    })
    it("BOOTSTRAP MODALS - I Should be able to automate all fixtures under bootstrap modals", function () {
        cy.get(alertsAndModals.popupadd).click();
        cy.get(alertsAndModals.alertsAndModalsBtn).click();
        cy.get(alertsAndModals.bootstrapModalsBtn).click()
        cy.get(alertsAndModals.singleLaunchModalsBtn).click()
        cy.get(alertsAndModals.singleCloseBtn).click()
        cy.get(alertsAndModals.relaunchSingleModals).click()
        cy.get(alertsAndModals.saveChangesBtn).click()
        cy.get(alertsAndModals.multiLaunchModalsBtn).click()
        cy.get(alertsAndModals.multipleCloseBtn).click()
        cy.get(alertsAndModals.relaunchMultiModals).click()
        cy.get(alertsAndModals.launchModals).click()
        cy.get(alertsAndModals.saveMultiChangesBtn).click()
})
it("WINDOW POPUP MODALS - I Should be able to automate all fixtures under window popup modals", function () {
    cy.get(alertsAndModals.popupadd).click();
    cy.get(alertsAndModals.alertsAndModalsBtn).click();
    cy.get(alertsAndModals.windowPopUpModals).click()
})
it("PROGRESS BAR MODALS - I Should be able to automate all fixtures under progress bar modals", function () {
    cy.get(alertsAndModals.popupadd).click();
    cy.get(alertsAndModals.alertsAndModalsBtn).click();
    cy.get(alertsAndModals.progressBarModals).click()
    cy.get(alertsAndModals.showDialog1).click()
    cy.wait(3000)
    cy.get(alertsAndModals.showDialog2).click()
    cy.wait(4000)
    cy.get(alertsAndModals.showDialog3).click()
    cy.wait(6000)
})
it("JAVASCRIPT ALERT - I Should be able to automate all fixtures under javascript alert", function () {
    cy.get(alertsAndModals.popupadd).click();
    cy.get(alertsAndModals.alertsAndModalsBtn).click();
    cy.get(alertsAndModals.javascriptAlert).click()
    cy.get(alertsAndModals.javaScriptBox1).click()
    cy.get(alertsAndModals.javaScriptBox2).click()
    //cy.get(alertsAndModals.javaScriptBox3).click()
})
it("FILE DOWNLOAD - I Should be able to automate all fixtures under file download", function () {
    cy.get(alertsAndModals.popupadd).click();
    cy.get(alertsAndModals.alertsAndModalsBtn).click();
    cy.get(alertsAndModals.fileDownload).click()
    cy.get(alertsAndModals.textBox).type(alertsAndModals.textWritten)
    cy.get(alertsAndModals.generateFileBtn).click()
    cy.get(alertsAndModals.downloadBtn).click()
})
})