describe('vote', () => {
    it('TC-003 vote for aventador', () => {
        cy.visit('https://buggy.justtestit.org/make/ckl2phsabijs71623vk0');
        cy.get('.input-sm').type("iviniegra");
        cy.get('.ng-pristine').type("Al3v1p79#");
        cy.get('.btn-success').click();
        cy.get(':nth-child(3) > :nth-child(1) > a > .img-thumbnail').click();
        cy.get('#comment').type("magnifico auto");
        cy.get('.btn').click();
        
    });
    
});