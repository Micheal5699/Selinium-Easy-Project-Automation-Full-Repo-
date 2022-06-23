import {listbox} from "../../cypress/fixtures/selectors.js";
describe("Given I am on Table page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
    it("LIST BOX/BOOTSTRAP LIST BOX - I Should be able to Automate all bootstrap list box fixtures ", function () {
        cy.get(listbox.popupadd).click();
        cy.get(listbox.listBoxDropdown).click();
        cy.get(listbox.bootStrapListBoxBtn).click()
        cy.get(listbox.firstname).click()
        cy.get(listbox.secondName).click()
        cy.get(listbox.thirdName).click()
        cy.get(listbox.fourthName).click()
        cy.get(listbox.fifthName).click()
        cy.get(listbox.moveRight).click()
        cy.get(listbox.moveLeft).click()
        cy.get(listbox.firstName1).click()
        cy.get(listbox.secondName1).click()
        cy.get(listbox.thirdName1).click()
        cy.get(listbox.fourthName1).click()
        cy.get(listbox.fifthName1).click()
        cy.get(listbox.unclickFifthName).click()
        cy.get(listbox.unclickFourthName).click()
        cy.get(listbox.unclickThirdName).click()
        cy.get(listbox.unclickSecondName).click()
        cy.get(listbox.unclickFirstName).click()
        cy.get(listbox.moveLeft1).click()
        cy.get(listbox.moveRight1).click()
        cy.get(listbox.checkBtn).click()
        cy.get(listbox.uncheck).click()
        cy.get(listbox.checkBtn1).click()
        cy.get(listbox.uncheBtn1).click()

})
it("JQUERY LIST BOX - I Should be able to Automate all Jquery list box fixtures ", function () {
    cy.get(listbox.popupadd).click();
    cy.get(listbox.listBoxDropdown).click();
    cy.get(listbox.jQueryListBox).click()
    cy.get(listbox.FirstNameList1).click()
    cy.get(listbox.addBtn).click()
})
it("DATA LIST FILTER - I Should be able to Automate all data list filter fixtures ", function () {
    cy.get(listbox.popupadd).click();
    cy.get(listbox.listBoxDropdown).click();
    cy.get(listbox.datalistFilterBtn).click()
    cy.get(listbox.inputsearch).type(listbox.searchText).clear()
    cy.get(listbox.inputsearch1).type(listbox.searchText1).clear()
    cy.get(listbox.inputsearch2).type(listbox.searchText2).clear()
    cy.get(listbox.inputsearch3).type(listbox.searchText3).clear()
    cy.get(listbox.inputsearch4).type(listbox.searchText4).clear()
    cy.get(listbox.inputsearch5).type(listbox.searchText5).clear()
    cy.get(listbox.faceIcon).click()
})
})