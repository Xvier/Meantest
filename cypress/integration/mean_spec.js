
describe('first test',function () {
    it('spec name', function () {

        cy.visit('localhost:3000');
        cy.screenshot("my-image");
       // cy.get('#query-btn').should('contain', 'Button')
    });
});