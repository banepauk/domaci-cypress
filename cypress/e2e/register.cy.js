describe('register test', () => {
  it('should visit', () => {
    cy.visit('https://gallery-app.vivifyideas.com/')
    cy.url().should('contain', 'gallery-app');
    cy.get('a[href="/register"]').click();
    cy.url().should('contain', '/register')
  })

  it('register without credentials', () => {
    cy.get('#first-name').type('TestR');
    cy.get('#last-name').type('TestRR');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
    cy.url().should('contain', '/register')
  })

  it('register with only first name', () =>{
    cy.reload()
    cy.get('#first-name').type('TestR');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
    cy.url().should('contain', '/register')
  })

  it('register with wrong email format', () => {
    cy.reload()
    cy.get('#first-name').type('TestR');
    cy.get('#last-name').type('TestRR');
    cy.get('#email').type('test.com');
    cy.get('#password').type('test12345');
    cy.get('#password-confirmation').type('test12345');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
    cy.url().should('contain', '/register')
  })

  it('register without accept term and cond', () =>{
    cy.reload()
    cy.get('#first-name').type('TestR');
    cy.get('#last-name').type('TestRR');
    cy.get('#email').type('test5544@gmail.com');
    cy.get('#password').type('test12345');
    cy.get('#password-confirmation').type('test12345');
    cy.get('.btn').click();
    cy.url().should('contain', '/register')
  })

  it('register with already registred email', () =>{
    cy.reload()
    cy.get('#first-name').type('TestR');
    cy.get('#last-name').type('TestRR');
    cy.get('#email').type('test@gmail.com');
    cy.get('#password').type('test12345');
    cy.get('#password-confirmation').type('test12345');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
    cy.url().should('contain', '/register')
  })

  it('register without confirmation password', () =>{
    cy.reload()
    cy.get('#first-name').type('TestR');
    cy.get('#last-name').type('TestRR');
    cy.get('#email').type('test@gmail.com');
    cy.get('#password').type('test12345');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
    cy.url().should('contain', '/register')
  })

  it('password contain 3 characters', () =>{
    cy.reload()
    cy.get('#first-name').type('TestR');
    cy.get('#last-name').type('TestRR');
    cy.get('#email').type('test5522@gmail.com');
    cy.get('#password').type('123');
    cy.get('#password-confirmation').type('123');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
    cy.url().should('contain', '/register')
  })

  it('register with valid credenitals', () =>{
    cy.reload()
    cy.get('#first-name').type('TestR');
    cy.get('#last-name').type('TestRR');
    cy.get('#email').type('test51522@gmail.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
    cy.url().should('not.contain', '/register')
  })

  it('register with two last names',() =>{
    cy.reload()
    cy.get('#first-name').type('TestR');
    cy.get('#last-name').type('TestRR TestRRR');
    cy.get('#email').type('test55522@gmail.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
    cy.url().should('not.contain', '/register')
  })
})
