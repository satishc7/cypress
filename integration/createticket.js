describe('My First TEST', function() {
    it('VISIT AS1 page', function() {
        cy.visit('https://staging.autoserve1.com/login')
        cy.viewport(1500, 800)

        cy.get('#username').type('satishc+releasetest17@autoserve1.com').should('have.value','satishc+releasetest17@autoserve1.com')
        cy.get('#password').type('rupert22').should('have.value','rupert22')
      

       // cy.get('button').click('btn btn-login text txt-medium', {force:true})
       cy.contains('Log in').click()
       cy.wait(2000)
       cy.url().should('eq','https://staging.autoserve1.com/serviceAdvisor/dashboard')
     
      cy.contains('New Vehicle').click()
      cy.url().should('eq','https://staging.autoserve1.com/neworder')
      cy.get('#firstName').type('some')

      cy.get('#lastName').type('ran')

      cy.get('#licensePlate').type('number')

      cy.get('#vin').type('2C3LA43R48H282361')

      cy.get('#v2-newOrder > div.as-neworder-header.row > div > div.col-xs-24.col-sm-16 > span > button').click()

      cy.wait(4000)


      cy.get('#ro').type('89w')

      cy.get('#tech').select('English Tech')

      cy.get('#as-neworder-create').click()

      cy.url().should('eq','https://staging.autoserve1.com/serviceAdvisor/dashboard')

      





        
      
        
    })
})