import 'cypress-iframe'
describe("Handling IFrame", () => {
    it("Resolve", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Use cy.iframe() command to access the iframe content
        //for name field
        cy.iframe().find('#RESULT_TextField-0').type("Meeeee");

      //  cy.iframe().find('input[value="Radio-0"]').check();
      // cy.iframe().find('label[for="RESULT_RadioButton-1_1"]').click();


      //for radio button  
      cy.iframe()
      .find('input[value="Radio-0"]')
      .invoke("prop", "checked", true) //set the "checked" property of the radio button.
      .should("be.checked");


      //for date
      cy.iframe()
      .find('[placeholder="mm/dd/yyyy"]').type('4/12/2024');

      //for dropdown
      cy.iframe().find('.drop_down').select("QA Engineer").should('have.value',"Radio-0");



    });
});