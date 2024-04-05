describe('login', () => {
    it('TC-002 log in to platform', () => {
        cy.visit('https://buggy.justtestit.org');
        cy.get('.input-sm').type("aviniegra");
        cy.get('.ng-pristine').type("Al3v1p79#");
        cy.get('.btn-success').click();
    });

});