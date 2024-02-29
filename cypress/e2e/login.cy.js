describe('template spec', () => {
   beforeEach ( () =>{
    cy.visit ('/')
  })

  it('download page', () => {
    cy.contains ("Books list").should('be.visible')
  })

  it ('valid login', () => {
    cy.login ("bropet@mail.ru","123")
    cy.contains ("Добро пожаловать bropet@mail.ru").should ("be.visible")
  })
})
