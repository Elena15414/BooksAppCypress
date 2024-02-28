const {login} = require("./login.cy")

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
    cy.get("Колобок").click()
    cy.get('.col-md-7 > .btn').click()
    cy.contains ("Dowload book").should ("be.visible")
  })
  })

describe ('Favorites', () => {

  it ("add favorite book", () => {
    cy.get('[href="book/d45f8554-b195-40e7-af1e-eb8de547928b"] > .h-100 > .card-footer > .btn').click()
    cy.contains ("Мойдодыр").should ("be.visible")
    })

  it ("delete favorite book", () => {
    cy.get('h4').click ()
    cy.get('.card-footer > .btn').click()

  })
})
})