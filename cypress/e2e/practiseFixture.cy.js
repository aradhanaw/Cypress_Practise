describe('Tutorialspoint Test', function () {
    //part of before hook
    before(function(){
    //access fixture data
    cy.fixture('example1').then(function(regdata){
    this.regdata=regdata
    })
    })
    // test case
    it('Test Case1', function (){
    // launch URL
    cy.visit("https://register.rediff.com/register/register.php")
    //data driven from fixture
    cy.get('[width="200"] > input').type(this.regdata.fullName)
    cy.get('#mobno').type(this.regdata.number)
    });
    });