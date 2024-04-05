describe('change password', () => {
    it('TC-005 change password', () => {
        cy.visit('https://buggy.justtestit.org');
        cy.get('.input-sm').type("aviniegra");
        cy.get('.ng-pristine').type("Al3v1p79#");
        cy.get('.btn-success').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#currentPassword').type("Al3v1p79#");
        cy.get('#newPassword').type("Al3v1p79$");
        cy.get('#newPasswordConfirmation').type("Al3v1p79$");
        cy.get('.btn-default').click();
    });

});