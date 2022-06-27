import {table} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on Table page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
    it("TABLE PAGINATION - User should be able to choose a page for table ", function () {
        cy.get(table.popupadd).click();
        cy.get(table.tableDropdownBtn).click();
        cy.get(table.tablePaginationBtn).click();
        cy.get(table.number2Btn).click();
        cy.get(table.number1Btn).click();
        cy.get(table.number3Btn).click();
        cy.get(table.prevuiousArrow).click();
        cy.get(table.nextArrow).click();
    });
    it("TABLE DATA SEARCH - User Should be able to search user by name ", function () {
        cy.get(table.popupadd).click();
        cy.get(table.tableDropdownBtn).click();
        cy.get(table.tableDateResearchBtn).click();
        cy.get(table.taskFilterIcon).click();
        cy.get(table.taskFilterSearchBtn).type(table.taskFilterName);
        cy.get(table.nameSelect).click();
    })

    it("TABLE DATA SEARCH - User Should be able to activate user icon and search for user ", function () {
        cy.get(table.popupadd).click();
        cy.get(table.tableDropdownBtn).click();
        cy.get(table.tableDateResearchBtn).click();
        cy.get(table.listedUserFilterBtn).click();
        cy.get(table.numberSearchBtn).type(table.numberTyped);
        cy.get(table.userNameField).type(table.userNameText);
        cy.get(table.firstNameField).type(table.firstNameText);
        cy.get(table.lastNameField).type(table.lastNameText);
    })
    it("TABLE FILTER - User Should be able to filter by color ", function () {
        cy.get(table.popupadd).click();
        cy.get(table.tableDropdownBtn).click();
        cy.get(table.tableFilter).click();
        cy.get(table.greenBtn).click();
        cy.get(table.yellowBtn).click()
        cy.get(table.redBtn).click()
        cy.get(table.allBtn).click()
        cy.get(table.greenCheck).click()
        cy.get(table.greenStar).click()
        cy.get(table.yellowCheck).click()
        cy.get(table.yellowStar).click()
        cy.get(table.redCheck).click()
        cy.get(table.redStar).click()
        cy.get(table.greenUnCheck1).click()
        cy.get(table.greenUnClickStar1).click()
        cy.get(table.greenCkeck1).click()
        cy.get(table.greenClickStar).click()
        cy.get(table.yellowCheck1).click()
        cy.get(table.yellowStar1).click()
})
it("TABLE SORT AND SEARCH - User Should be able to search user by text", function () {
    cy.get(table.popupadd).click()
    cy.get(table.tableDropdownBtn).click()
    cy.get(table.tableSortAndSearch).click()
    cy.get(table.amountOfEntries).select('25')
    cy.get(table.amountOfEntries).select('50')
    cy.get(table.amountOfEntries).select('100')
    cy.get(table.searchName).type(table.nameText)
    cy.get(table.amountOfEntries3).select('10')
    cy.get(table.nextBtn).click()
    cy.get(table.nextBtn1).click()
    cy.get(table.nextBtn2).click()
    cy.get(table.nextBtn3).click()
    cy.get(table.previousBtn).click()
    cy.get(table.previousBtn1).click()
    cy.get(table.previousBtn2).click()
    cy.get(table.previousBtn3).click()
})
it("TABLE DATA DOWNLOAD- User Should be able to download table data ", function () {
    cy.get(table.popupadd).click()
    cy.get(table.tableDropdownBtn).click()
    //cy.get(table.tableDataDownload12).click()
    cy.get(table.slideRight).click()
})
})