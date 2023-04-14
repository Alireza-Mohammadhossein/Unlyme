/// <reference types= 'cypress' />

describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('guide component', () => {
    it('guid component loaded successfully', () => {
      // cy.get('[data-test="guide_heading"]')
      cy.getByData('guide').find('label').eq(4).click()
    })
  
    // it.only('cloud blocks loaded successfully', () => {
    it('cloud blocks loaded successfully', () => {
      cy.get('.cloud-block').eq(5).should('exist')
    })
  })

})