//invoke(jQuery method)  ---Invoke a function on the previosuly yielded subject on the basis of Function Name

//trigger('event-name','position','options')  --- Trigger an event on a DOM element

//invoke('attr','attribute name') - get the value of an attribute
//invoke('attr','attribute name','new value for the attribute') 
describe("Slider",()=>{

    it.only("Slider testing",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("div#slider span").invoke("attr","style","left:90%");
    })

    it("Slide when input type is range",()=>{
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/slider");
        cy.get("#rangeone").invoke('val','70').trigger("change");
        cy.get('#one').should('have.text',"70");
        cy.get("#rangetwo").invoke('val','30').trigger("change");
        cy.get("#two").should('have.text',"30");
    })

    it("Slider ----  Build from CSS",()=>{
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/styledslider#slide-1");
        cy.get("div#slide-2").click({force:true});
        cy.get("div#slide-3").click({force:true});
        cy.get('a[href="#slide-1"]').click();
        cy.url().should('include',"#slide-1");

    })
   

})