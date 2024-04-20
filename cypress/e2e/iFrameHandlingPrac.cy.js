describe("Handling IFrames",()=>{
    it("Validate that user should be able to write a text inside the availabe area",()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce");
        //unable to type here because  it is under iframe. So, First we need to identify the iframe then we need to resolve the internal html
        //cy.get('#mce_0_ifr').type("Hello Kitty!!!!!!!!");


        //get the main iframe , and then resolve that iframe
        cy.get('#mce_0_ifr').then(($iframe)=>{

            let iframebody = $iframe.contents().find('body')   //get the body
            cy.wrap(iframebody)
            .clear()
            .type("Hello Kitty!!!!!!!!")
            .type('{selectall}') // to select previously written text
            //if we want to perform a cypress chaining command, we need to use cy.wrap command. Because,these functions, this functionality resolving the promises is not a cypress thing. It is a jQuery thing.
            cy.get('[aria-label="Bold"]').click();
        })
    })
})