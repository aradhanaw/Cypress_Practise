import "cypress-real-events";
describe("Mouse Over",()=>{
    beforeEach(()=>{
        cy.visit("https://www.yatra.com/");
    })
    it("Mouse over using cypress real event",()=>{
        cy.get('.more-arr').realHover();
    })
})