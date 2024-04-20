describe("Alert",()=>{
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
    })
    it("Alert message Box",()=>{
        cy.get('[onclick="myFunctionAlert()"]').click();
        cy.on('window:alert',(ele)=>{
            expect(ele).to.contains("I am an alert box!")
        })
        
    })

    it("Confirmation box, pressed ok",()=>{
        cy.get('[onclick="myFunctionConfirm()"]').click();
        cy.on('window:alert',(ele)=>{
            expect(ele).to.contains("Press a button!")
        })
        cy.get('#demo').should('have.text',"You pressed OK!");
    })

    it("Confirmation box, cancel",()=>{
        cy.on('window:confirm',(ele)=>{
            expect(ele).to.contains("Press a button!")
            return false;   //here,returning false cancel the confirmation box. 
        })
        cy.get('[onclick="myFunctionConfirm()"]').click(); //hrere. intercept window:confirm before clicking on the button because Cypress commands are queued and executed asynchronously. Intercepting the window.confirm dialog first helps avoid race conditions where the dialog might appear before you can intercept it, leading to unpredictable test behavior.
        cy.get('#demo').should('have.text',"You pressed Cancel!");
        
    })

    it("Prompt",()=>{
        cy.window().then(function(prom){
            cy.stub(prom,"prompt").returns("Tanjiro")//.This line creates a stub (a fake implementation) of the prompt method on the window object (prom in this case). The returns() function is then called on the stub, specifying that whenever the prompt method is called, it should return the string "Tanjiro". Instead of actually displaying a dialog box asking for user input, the stubbed method immediately returns the specified value ("Tanjiro")
        })
        cy.get('[onclick="myFunctionPrompt()"]').click();
        cy.get('#demo').should('have.text',"Hello Tanjiro! How are you today?")

    })
})