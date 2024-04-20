// describe("Handling IFrame",()=>{

//     it.only("Resolve",()=>{
//         cy.visit("https://testautomationpractice.blogspot.com/");

//         //get the main frame and then resolve that iframe
//         cy.get('#frame-one796456169').then(($iframe)=>{
//             let iframebody = $iframe.contents().find('#RESULT_TextField-0')   //get the name field
//             cy.wrap(iframebody)
//             .type("Meeeee");


//             // for radio button
//             let iframegender = $iframe.contents().find('input[value="Radio-0"]')  
//             .invoke("prop", "checked", true)    
//             cy.wrap(iframegender).should("be.checked");
           
//         })  
//     })

  
// })


describe("Handling IFrame", () => {
    it.only("Resolve", () => {
      cy.visit("https://testautomationpractice.blogspot.com/");
      //get the main frame and then resolve that iframe
      cy.get("#frame-one796456169").then(($iframe) => {
        let iframebody = $iframe.contents().find("#RESULT_TextField-0"); //get the name field
        let radioBtn = $iframe
          .contents()
          .find('input[type="radio"][value="Radio-0"]');
        cy.wrap(iframebody).type("Meeeee");
        cy.wrap(radioBtn).check({ force: true }).should("be.checked");
        // for radio button
      });
    });
  });




