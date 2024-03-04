describe('Book list', () => {
  beforeEach ( () =>{
    cy.visit ('/')
    cy.login ("bropet@mail.ru","123")
  })

  it('Add book', () => {
    cy.addNewBook ("Мойдодыр"," ","Корней Чуйковский")
    cy.contains ("Мойдодыр").should ('be.visible')
    cy.addNewBook("Колобок"," ", "Толстой Алексей Николаевич")
    cy.contains ("Колобок").should ('be.visible')
  })

describe('Dowload book', () => {

  it('Dowload book', () => {
    cy.contains("Колобок").click()
    cy.get('.col-md-7 > .btn').click()
    cy.contains ("Dowload book").should ("be.visible")
  })
})

describe ('Favorites', () => {

  it("add favorite book", () => {
    cy.contains("Add to favorite").click()
    cy.get('h4').click()
    cy.contains("Delete from favorite").should("be.visible")
  })

  it ("delete favorite book", () => {
    
    cy.get('h4').click()
    cy.contains("Delete from favorite").should("be.visible")
    cy.contains("Delete from favorite").click()
    cy.get('.text-light > .ml-2').click()
    cy.contains("Add to favorite").should ("be.visible")
  })
})
})