describe('Register', () => {
    it("TC-001 register new user", () => {
        cy.visit('https://buggy.justtestit.org/register');
        cy.get('#username').type("hviniegra");
        cy.get('#firstName').type("guillermo");
        cy.get('#lastName').type("Viniegra");
        cy.get('#password').type("Al3v1p79#");
        cy.get('#confirmPassword').type("Al3v1p79#");
        cy.get('.btn-default').click();
    });

});