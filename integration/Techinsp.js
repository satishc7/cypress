

describe('Perform inspection', function () {
    it('AS a Tech start inspection', function () {
        cy.visit('https://staging.autoserve1.com/login')
        cy.viewport(1500, 800)

        cy.get('#username').type('satishc+releasetest17@autoserve1.com').should('have.value', 'satishc+releasetest17@autoserve1.com')
        cy.get('#password').type('rupert22').should('have.value', 'rupert22')
        // Login to store 
        cy.contains('Log in').click()


        // switch to tech 
        cy.get('#dropdownMenu').click()

        cy.get('.regular-responsive-header > .navbar > .dropdown-menu > .pendo-header-navbar-switch-user-button > a').click()

        cy.get('[data-id="CcZAQ8bDmdhfdtfzY"]').click()

        cy.get('#my-vehicles > .pendo-technician-dashboard-vehicleInShop-button > :nth-child(4)').click()


        cy.get('.list-group > :nth-child(3)').click()


        for (var j = 2; j <= 8; j++) {

            maintenance(j);

        }
        function maintenance(j) {

            cy.get(":nth-child(" + j + ") > .inspection-item > div.col-xs-12 > .row > .inspection-item-severity > .warning").click()

        }

        cy.get('#app > div > div > div.inspectionOrderlayout.row > div.inspection-header > nav > div.scroll-area > ul > li:nth-child(4) > div > div.hidden-xs.hidden-sm.large-text-tab').should('be.visible')
        cy.get('.list-group > :nth-child(4)').click()


        for (var i = 2; i <= 7; i++) {

            drive(i);

        }
        function drive(i) {

            cy.get(":nth-child(" + i + ") > .inspection-item > div.col-xs-12 > .row > .inspection-item-severity > .critical").click()

        }

        for (var n1 = 2; n1 < 7; n1++) {
            notedrive(n1);
        }
        function notedrive(n1) {
            cy.get(":nth-child(" + n1 + ") > .inspection-item > :nth-child(2) > .row > .inspection-item-map-photo-note > .pull-right > .inspection-item-notes > .icon").click()
            cy.get('#edit-note-textarea').type("first note "+n1+"")
            cy.wait(2000)
            cy.get('.pull-right > .btn-primary').click()
        }

        //lighting tab

        cy.get('.list-group > :nth-child(5)').click()

        for (var k = 2; k <= 6; k++) {
            lighttab(k);
        }
        function lighttab(k){
            cy.get(":nth-child(1) > :nth-child("+k+") > .inspection-item > div.col-xs-12 > .row > .inspection-item-severity > .okay").click()


        }

        for (var k1 = 2; k1 <= 6; k1++) {
            lighttab1(k1);
        }
        
        function lighttab1(k1){
            cy.get(":nth-child(2) > :nth-child("+k1+") > .inspection-item > div.col-xs-12 > .row > .inspection-item-severity > .okay").click()
            
        }
 
        cy.get('.finish-inspection').click()



       
        cy.url().should('eq', 'http://localhost:8000/users/1/edit')
        cy.url('https://staging.autoserve1.com/v2/technician/dashboard').then(function() {
            cy.get('#dropdownMenu').click()

            cy.get('.regular-responsive-header > .navbar > .dropdown-menu > .pendo-header-navbar-switch-user-button > a').click()

            cy.get('.pendo-worker pendo-worker-ServiceAdvisor worker').click()

            cy.get('.pendo-dashboard-v1-ticket-report-button').clci()


        })




        // cy.get(':nth-child(8) > .inspection-item > :nth-child(2) > .row > .inspection-item-map-photo-note > .pull-right > .media-button > .as1-button > .icon').click()

        // cy.fixture('2.jpg')
        // cy.get(':nth-child(2) > #ticket-status > [href="#"] > .pendo-dashboard-v1-ticket-inspection-button > .img-container').click()










    })
})