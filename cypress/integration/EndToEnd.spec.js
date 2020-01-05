/// <reference types="Cypress" />

describe('This is the End To End test for Bkeeper',()=>{
    it('should load',()=>{
        cy.visit('http://localhost:3000')
    });

    it('Should allow you to log in ',()=>{
        cy.get('input').first().type('Post@Test.com');
        cy.get('input').eq(1).type('234wsxedc');
        expect(cy.contains('Submit').click());
        expect(cy.contains('Welcome Back'))
    });

    it('Should let you add a artist',()=>{
        cy.contains('Artist').click();
        cy.contains('Add Artist').click();
        const testInfo = ['The Band Test','TestEmail@Email.com','TestMetal','','Michael Walker , Test-man , Pepsi-man','This is a great test'];
        cy.get('input').each((element,index)=> {if(index !== 3) cy.wrap(element).type(testInfo[index])}).end();
        cy.contains('Add to Roster').click()
    });
    it('Roster should have the added artist',()=>{
        cy.contains('Artist').click();
        cy.contains('Roster').click();
        cy.contains('The Band Test').end();
    });

    it('Should let you add a project to the artist',()=>{
        cy.contains('Add Project').click();
        cy.get('select').select('The Band Test');
        cy.get('#tracks').type('12');
        cy.get('#deposit').type('240');
        cy.get('#projectName').type('The Test Project');
        cy.get('#startDate').type('2020-12-12');
        cy.get('.row > :nth-child(2) > .btn').click();
        cy.wait(10)
    });

    it('Roster should have the added Project',()=>{
        cy.visit('http://localhost:3000/roster');
        cy.contains('The Band Test').click();
        cy.contains('The Test Project');
    });

    it('Should let you add a session to project',()=>{
        cy.contains('Add Session').click();
        cy.get('select').select('The Band Test');
        cy.get('#Project').select('The Test Project');
        cy.get('#Hours').type('4');
        cy.get('#Action').type('The Test Session');
        cy.get('#Date').type('2020-12-12');
        cy.get('#Cost').type('40');
        cy.get('#sessionForm > .btn').click();
    });

    it('Roster should have the added Session',()=>{
        cy.visit('http://localhost:3000/roster');
        cy.contains('The Band Test').click();
        cy.contains('The Test Project').click();
        cy.contains('The Test Session');
    });

    it('Should be able to add a payment',()=>{

        cy.visit('http://localhost:3000/payment');
        cy.get('#artist').select('The Band Test');
        cy.get('#project').select('The Test Project');
        cy.get('#date').type('2020-12-12');
        cy.get('#amount').type(200);
        cy.get('button').contains('Add Payment').click();
    });

    it('Roster should have the added Payment',()=>{
        cy.visit('http://localhost:3000/roster');
        cy.contains('The Band Test').click();
        cy.contains('The Test Project').click();
        cy.contains('The Test Session');
        cy.contains('Payment')
    });

    it('Should be able to remove the artist',()=>{
        cy.contains('Artist').click();
        cy.contains('Roster').click();
        cy.contains('The Band Test').click();
        cy.get('.collapsing > .inner > .form-group > .container-fluid > .mt-2').first().click()
    });



    it('should let you log out',()=>{
        cy.contains('Log Out').click();
        cy.contains('Log In')
    });
});