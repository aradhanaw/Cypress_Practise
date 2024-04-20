describe("Windows Handling",()=>{
    it.only("Remove target",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get('[href="http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger"]').invoke('removeAttr','target').click() 
        cy.get('[href="https://www.blogger.com"]').invoke('removeAttr','target').click();
      // cy.get('h2').should('have.text',"Publish your passions, your way");
      //  cy.url().should('eq',"https://www.blogger.com/about/?bpli=1")
      cy.visit("https://testautomationpractice.blogspot.com/");
        
       

        
    })

    it("Remove target",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
       // delete target attribute with invoke for link
        cy.get("a[href='/windows/new']") .invoke('removeAttr', 'target').click()
      // verify child window url
      cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
      // shift to parent window
      cy.go('back');
       

        
    })



})