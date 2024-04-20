describe("Mouse Over",()=>{
    beforeEach(()=>{
        cy.visit("https://www.yatra.com/");
    })
    it("Moude over using trigger method",()=>{
        //cy.get(".more-arr").trigger('mouseover');
        //here trigger is not working .so,instead of trigger method we can use invoke function as invoke show.
        //while invoking make sure to use the proper locator(i.e immediate parent)
        cy.get(".moreOption").invoke('show');

        //cy.get('#booking_engine_adventures > :nth-child(2)').click({force:true})
        //use it if you want to click that particular locator without doing mouseover.(get the locator and then force click it.)
    })
})