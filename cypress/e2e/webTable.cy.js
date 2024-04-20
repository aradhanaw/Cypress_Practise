describe("Handling web table",()=>{
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
    })
    it("Find the presence of any data in the table",()=>{
        cy.get('table[name="BookTable"]').contains('td',"Learn Selenium").should("be.visible")
    })


    it("Check value presence in specific rows and columns",()=>{
        cy.get('table[name="BookTable"]> tbody > :nth-child(2) > :nth-child(3)').contains("Selenium").should("be.visible")
    })
   
    //check the value presence based on conditon by iterating rows. 

    it.only("Check the book name Master In Java whose author is Amod",()=>{
        cy.get('table[name="BookTable"]>tbody>tr td:nth-child(2)').each(($ele,index,$list)=>{
            const text =$ele.text()
            if(text.includes("Amod")){
                cy.get('table[name="BookTable"]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
                    const bookName = bname.text()
                    expect(bookName).to.equal("Master In Java")
                })
            }
        })
    })


})