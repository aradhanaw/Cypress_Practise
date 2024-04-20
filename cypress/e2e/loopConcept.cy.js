let log = console.log;
describe('loops_comcept',()=>{
    it('Loop Concept 1',()=>{
        log('1');
        cy.visit("https://www.google.com/");
        log('2');
        cy.get("[name=q]").type("Hello World");
        log('3');
    })

//cypress will start executing commands in queue.
    it('For loop concept',()=>{
        for(let i=0;i<3;i++){
            log('-',i);
            cy.then(()=>log('*',i));
        }
    })

    //wrap the array and pass it into each loop 
    it('For Each Concept 1',()=>{
        cy.wrap(['a','b','c']).each((ele)=>log(ele));
    })

    it("For each concept 2",()=>{
        cy.visit("https://www.google.com/");
        cy.get('a').each((ele)=>log(ele.text()));
    })


    it("Loop",()=>{
        let list = [];
        for(let i=0;i<10;i++){      //10 then commands are in the loop and are added in the queue
            cy.then(()=>{
                list.push(i);
            })

        }
        log(list.length); //here length is displayed as 0 because in cypress it will be executed first.
        cy.then(()=>{
            log(list.length); // later it will run 
        })
        
        
    })


   

})