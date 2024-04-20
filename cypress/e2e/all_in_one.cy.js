describe("Automation",()=>{
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
    })
    it("Form Fill up",()=>{
        cy.get('#name').type("Tanjiro");
        cy.get('#email').type("tanjiro@gmail.com");
        cy.get('#phone').type("9862310020");
        cy.get('#textarea').type("HI!! I AM TANJIRO");
        //radio button
        cy.get('#male').check();
        cy.get('#sunday').check();
        cy.get('input[type="checkbox"]').check('monday');
        cy.get('input[type="checkbox"]').check('tuesday');
        cy.get('#wednesday').check();
        cy.get('select').eq(0).select("Australia").should('have.value',"australia");
        cy.get('select').eq(1).select("White");
       // cy.get('select').eq(1).select("White").should('have.value',"white");
       cy.get('select').find('[value="white"]').should('have.value',"white");
        //date

        //cy.get('#datepicker').click();
        //cy.get(':nth-child(5) > :nth-child(2) > .ui-state-default').click();    
        cy.get('#datepicker').click().type("11/11/2023");
        cy.get('#post-body-1307673142697428135').click();

    })
    
    //Web Table
    it("Check number of Rows and Columns",()=>{
        cy.get('table[name="BookTable"]>tbody>tr').should('have.length',"7");
        cy.get('table[name="BookTable"]>tbody>tr>th').should('have.length',"4");

    })


    it("Verify the presence of specific data in particular row and column",()=>{
        cy.get('tbody > :nth-child(6) > :nth-child(1)').contains("Master In Java");
    })

    it("Read all the rows and colums data",()=>{
        cy.get('table[name="BookTable"]>tbody>tr')
        .each( ($row,index,$rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get("th").each( ($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })
        })


    })

    //Pagination Table

    it("Pagination",()=>{
        //verify that in 1 page, 5 data is displayed
        cy.get('#productTable>tbody>tr').should('have.length',"5");

        //pagination
        let totalPages = 4;
        for(let p=1;p<=totalPages;p++)
        {
            if(totalPages>1){
                cy.log("Active Page is "+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(4000);
                cy.get('#productTable>tbody>tr')// capture all the rows
                .each( ($row,index,$rows)=>{          //read each and every row.
                    cy.wrap($row).within( ()=>{       //wrap that particular row and go inside of that row
                        cy.get('td:nth-child(2)').then((prod)=>{      // get the 2nd column from that row
                            cy.log(prod.text());                      //get text from that particular column
                        })

                    })
                })
                
                
            }
        }


    })

    //tabs ---search
    it("Search",()=>{
        cy.get('#Wikipedia1_wikipedia-search-input').type("hello");
        cy.get('.wikipedia-search-button').click();
        cy.get('a').should('contain',"Hello Kitty");
        cy.get('a').contains("Hello Kitty").click();
    })

    it("Double Click",()=>{
        cy.get('button[ondblclick="myFunction1()"]').dblclick();
    })

})