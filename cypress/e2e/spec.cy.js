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

  it ('null email', () => {
    cy.login (null, "123")
    cy.get('#mail').then ((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect (elements [0]. validationMessage).to.be.eql ("Заполните это поле.")
    })
    
  })

  it ('null password', () => {
    cy.login ("bropet@mail.ru", null)
    cy.get('#pass').then ((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect (elements [0]. validationMessage).to.be.eql ("Заполните это поле.")
    })
  })

describe('Book list', () => {
  beforeEach ( () =>{
    cy.login("bropet@mail.ru","123")
  })
  
  it('Add book', () => {
    cy.addNewBook ("Мойдодыр"," ","Корней Чуйковский")
    cy.contains ("Мойдодыр").should ('be.visible')
  })

describe('Dowload book', () => {

  it('Dowload book', () => {
    cy.get('[href="book/408cf46f-1c60-4440-9f7f-26d98c1a327a"] > .h-100 > .card-body').click()
    cy.get('.col-md-7 > .btn').click()
    cy.contains ("Dowload book").should ("be.visible")
  })
  })

describe ('Favorites', () => {

  it ("add favorite book", () => {
    cy.get('[href="book/408cf46f-1c60-4440-9f7f-26d98c1a327a"] > .h-100 > .card-body > .card-title').click()
    cy.contains ("Мойдодыр").should ("be.visible")
    })

  it ("delete favorite book", () => {
    cy.visit ("http://localhost:3000")
    cy.get('[href="book/408cf46f-1c60-4440-9f7f-26d98c1a327a"] > .h-100 > .card-footer > .btn').click ()
    cy.contains ("Мойдодыр").should ("be.visible")
    })
  })
})
})