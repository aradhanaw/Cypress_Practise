describe("Various Assertions Types",()=>{
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");

    })
    it("Implicit Assertion 1",()=>{
        cy.url().should('include','.blogspot.com/');
        cy.url().should('eq',"https://testautomationpractice.blogspot.com/");
        cy.url().should('contain','.blogspot.com/');

    })
    it("Implicity Assertion 2",()=>{
        cy.url().should('include','.blogspot.com/')
        .should('eq',"https://testautomationpractice.blogspot.com/")
        .should('contain','.blogspot.com/');
        

    })
    //use only for same
    it("Implicit Assertion 3",()=>{
        cy.url().should('include','.blogspot.com/')
        .and('eq',"https://testautomationpractice.blogspot.com/")
        .and('contain','.blogspot.com/')
        //for negative value
        .and('not.contain',"whattttt");


    })
    it("Check the text field visibility",()=>{
        //cy.get('#name').should('exist');
        cy.get('#name').should('be.visible').and('exist');
        cy.get('input.form-check-input[type="checkbox"]').should('have.length',7);

    })

    it.only("Explicit Assertion",()=>{
        assert.equal(true,true)
        assert.notEqual(true,false)

        expect(true).to.eq(true)
        expect(true).not.to.eq(false);

        cy.get('[for="sunday"]').then((element)=>{
            let value = element.text()
            expect("Sunday").to.eq(value);
            
            assert.equal('Sunday',value);
        })

    })
})