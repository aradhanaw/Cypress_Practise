// describe("Select Multiple",()=>{
//     it("Select Multiple Colors",()=>{
//         cy.visit("https://testautomationpractice.blogspot.com/");
//         cy.get('#colors').select(['red','blue','green','yellow','white']).invoke("val")
    
//         to.deep.equal('have.value',['red','blue','green','yellow','white']);
//     })

// })

describe("Select Multiple", () => {
    it("Select Multiple Colors", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Select multiple options and retrieve the selected values
        cy.get('#colors').select(['red', 'blue', 'green', 'yellow', 'white']).invoke("val").then(selectedValues => {
            // Check if the selected values are as expected
            expect(selectedValues).to.deep.equal(['red', 'blue', 'green', 'yellow', 'white']);
        });
    });

    it.only("Select Multiple Colors", () => {
        // Visit the webpage
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Select multiple options and check their values
        cy.get('#colors').select(['red', 'blue', 'green', 'yellow', 'white']).then(() => {
            // Retrieve the selected values
            cy.get('#colors').invoke("val").should("deep.equal", ['red', 'blue', 'green', 'yellow', 'white']);
        });
    });
});



 
