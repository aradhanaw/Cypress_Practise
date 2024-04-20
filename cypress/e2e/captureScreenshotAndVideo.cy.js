describe("Capture Screenshot",()=>{
    it("Screenshot Manually",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.screenshot("homepage"); //taking screenshot and naming as homepage
        cy.wait(4000);
        cy.get('img[alt="Your Store"]').screenshot("logo"); //taking screenshot by locating the path and named it as logo.

    })
//Automatically capture screenshot and video on failure (Only when we execute this through CLI)
    it.only("Automatically capture Screenshot on failure",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.get('.nav > :nth-child(4) > .nav-link').click(); //click tablets
        cy.get('h2').should('have.text',"Camera");


    })
})