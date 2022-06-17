/// <reference types="cypress" />
it('has experimentalInteractiveRunEvents set to true', () => {
  expect(Cypress.config()).to.have.property('experimentalInteractiveRunEvents', true)
})
