describe("Resize",()=>{
    it("Resize the window",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#resizable").invoke("attr","style","width: 501.4px"," height: 360.4px")
    })
})