describe("Radio Button",()=>{
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");

    })
    it("Radio Button",()=>{
        cy.get('#male').check().should('be.checked');
        cy.get('#female').should('not.be.checked');
        cy.get('#female').check().should('be.checked');
        cy.get('#male').should('not.be.checked');
    })
})