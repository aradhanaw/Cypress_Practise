// describe("Select Functionality",()=>{
//     it("Check if user can select all the values",()=>{
//         cy.visit("https://testautomationpractice.blogspot.com/");
//         cy.get('#country option').each(($ele,index,$list)=>{
//         // Get the text of the current element
//         const elementText = $ele.text().trim();
//         cy.wrap($ele).click({force: true});


//         })
//     })
// })


describe("Select Functionality", () => {
    it("Check if user can select all the values", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        
        // Wait for the dropdown to be visible and clickable
        cy.get('#country').should('be.visible');

        // Iterate over each option in the dropdown
        cy.get('#country option').each(($ele, index, $list) => {
            // Get the text of the current option
            const optionText = $ele.text().trim();

            // Select the option from the dropdown
            cy.get('#country').select(optionText);

            // Verify that the selected option matches the value of the dropdown
            cy.get('#country').should('have.text', optionText);

            // Log to indicate the option is selected
            cy.log(`Selected option ${index + 1}: ${optionText}`);
        });
    });
});



