describe('The application main page', () => {

    it('Page is loaded correctly', () => {
        cy.visit('http://localhost:8080/')
        cy.contains('Measured temperatures')
    })


});