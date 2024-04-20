///reference types = "Cypress"/>

import DatePickerPage from "../support/pageObjects/datePickerPage";
describe("Date Picker",()=>{
    var datePickerPage = new DatePickerPage();
    it("Open the site and then open date picker",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        
        datePickerPage.getDatePicker().click()
        //assert
        datePickerPage.getCalender().should('be.visible');

        
    })

    it('select date',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        
        datePickerPage.getDatePicker().click()
        
        cy.selectYear(2023)

        cy.selectMonth('January')

        cy.selectDay(10)   //called the method and it should be declared. So, here, it is declared on command.js--- why it is declared on command.js?? ---- to make our test more organized, readable.
    })
})