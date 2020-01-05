/// <reference types="Cypress" />

/* 
A Real Test Typically takes place over three phases 

Phase One - Set Up The Application state
Phase Two - Take an Action
Phase Three - Make an assertion

or

arrange
act
assert

or

given 
when
then


first put the application into a specific state
then take some action in the application that causes it to change 
finally check the resulting application state
*/

/*
1) Visit a web page
2) Query for a element 
3) interact with that element 
4) Assert about the content of that page
*/

describe('This is for testing the apps home page',()=>{
    beforeEach(()=>{
        sessionStorage.clear();
    });

    it('should start at the login page',()=>{
        cy.visit('http://localhost:3000');
    });
    it('Should say Log In on the page',()=>{
        cy.contains('Log In')
    });
    it('Should have two user input fields',()=>{
        cy.get('input').should('have.length',2)
    });
    it('Should reject the wrong log in info',()=>{
        cy.get('input').first().type('Post@Test.com');
        cy.get('input').eq(1).type('234wsxedc');
        expect(cy.contains('Submit').click).to.have.throw();
        expect(cy.url().should('include','/'));
        cy.get('input').first().clear();
        cy.get('input').last().clear();
    });
    it('Should log in when provided the correct info',()=>{
        cy.get('input').first().type('Post@Test.com');
        cy.get('input').eq(1).type('234wsxedc');
        expect(cy.contains('Submit').click());
        expect(cy.contains('Welcome Back'))
    });
    it('Should have a log out button if you are logged in',()=>{
        cy.contains('Log Out').click();
        cy.contains('Log In')
    });

    it('Should not have one if logged out',()=>{
       console.log(cy.get('button').should('have.length','2'))
    })

});

