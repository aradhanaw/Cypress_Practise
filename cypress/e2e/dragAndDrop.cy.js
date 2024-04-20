import '@4tw/cypress-drag-drop'
describe("Drag and Drop Functionality",()=>{
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        
    })
    it("Drag the target and drop to the location",()=>{
        cy.wait(3000)
        cy.get('#draggable').drag('#droppable');
    


    })
})