describe('fill-profile', () => {
    it('TC-004 fill-profile', () => {
        cy.visit('https://buggy.justtestit.org');
        cy.get('.input-sm').type("aviniegra");
        cy.get('.ng-pristine').type("Al3v1p79#");
        cy.get('.btn-success').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#gender').type("Male");
        cy.get('#age').type("44");
        cy.get('#hobby').select("Reading");
        cy.get('.btn-default').click();
       
    });

});