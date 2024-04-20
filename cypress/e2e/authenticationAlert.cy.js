describe("Authentication Alert",()=>{
    
    it("Authentication Alert Method 1",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.get('h3').should('have.text',"Basic Auth");
        
    })

    it("Authentication Alert Method 2",()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:'admin',password:'admin'}});
        cy.get('h3').should('have.text',"Basic Auth");
        
    })
})