/// <reference types="Cypress" />

describe('This is the End To End test for Bkeeper',()=>{
    it('should load',()=>{
        cy.visit('http://localhost:3000')
    });

    it('Should allow you to log in ',()=>{
        cy.get('input').first().type('Post@Test.com')
        cy.get('input').eq(1).type('234wsxedc')
        expect(cy.contains('Submit').click());
        expect(cy.contains('Welcome Back'))
    });

    it('Should let you add a artist',()=>{
        cy.contains('Artist').click();
        cy.contains('Add Artist').click();
        const testInfo = ['The Band Test','TestEmail@Email.com','TestMetal','','Michael Walker , Testman , Pepsi-man','This is a great test'];
        cy.get('input').each((element,index)=> {if(index !== 3) cy.wrap(element).type(testInfo[index])}).end()

        cy.contains('Add to Roster')
    });



    it('should let you log out',()=>{
        cy.contains('Log Out').click();
        cy.contains('Log In')
    });
})