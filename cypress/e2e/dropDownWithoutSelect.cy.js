describe("Search",()=>{
    it("Dropdown without select tag",()=>{
        cy.visit("https://www.amazon.com/");
        cy.get('#twotabsearchtextbox').type("iphone");
        cy.get(".left-pane-results-container").find(">div").contains("iphone 14 pro max case").click();
    })

})


    it.only("Dynamic DropDown",()=>{
        cy.visit("https://www.amazon.com/");
        cy.get('#twotabsearchtextbox').type("iphone");

        //cy.get('#nav-bb-search').type("ip");
        cy.get(".left-pane-results-container").each(($el,index,$list)=>{
            if($el.text()==='iphone'){
                cy.wrap($el).click();
            }
        })


        
    })
    
