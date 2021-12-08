/// <reference types="cypress" />

describe('My First Test', () => {
    it('Gets, types and asserts', () => {

        // MyRev Login Page
        cy.visit('http://localhost:4200/')

        // Create a new Account
        cy.get('a').contains('Don').first().click()
        // Begin typing details into each field
        cy.get('input').first().focus()
            .type('New User')
            .should('have.value', 'New User')
            .wait(500)
            // Move to next Input field
            .get('input').eq(1).focus()
            .type('Who Dis?')
            .should('have.value', 'Who Dis?')
            .wait(500)
            // Move to next Input field
            .get('input').eq(2).focus()
            .type('NewUser')
            .should('have.value', 'NewUser')
            .wait(500)
            // Move to next Input field
            .get('input').eq(3).focus()
            .type('newuser@whodis.com')
            .should('have.value', 'newuser@whodis.com')
            .wait(500)
            // Move to next Input field
            .get('input').eq(4).focus()
            .type('NewPass')
            .should('have.value', 'NewPass')
            .wait(500)
            // Click "Rev Up!" to finish Account creation
            .get('button').contains('Rev ').first().click()
            .wait(500)


        // Login to new Account
        cy.get('input').first().focus()
            //  Type Username
            .type('NewUser')
            .wait(500)
            .get('input').eq(1).focus()
            // Type Password
            .type('NewPass')
            .wait(500)
            // Click 'Login' button
            .get('button').contains('Login').first().click()
            .wait(500)

        // Open hamburger menu
        cy.get('.hamburger-container').click()
            // Click "View Profile" 
            .get('a').contains('View').first().click()
            // // Close hamburger menu
            // .get('i').first().click()
            // Click "Edit" button
            .get('button').contains('Edit').first().click()
            .wait(1000)
            // Select "Middle Name" Input field
            .get('input').eq(3).focus()
            // Type Middle Name
            .type(' , ')
            .should('have.value', ' , ')
            .wait(500)
            // Select "Gender" Input field
            .get('input').eq(4).focus()
            // Type Gender
            .type('U')
            .should('have.value', 'U')
            .wait(500)
            // Select "Job Title" Input field
            .get('input').eq(6).focus()
            // Type Job Title
            .type('Cypress Tester')
            .should('have.value', 'Cypress Tester')
            .wait(500)
            // Select "Age" Input field
            .get('input').eq(7).focus()
            // Type Age
            .type('13')
            .should('have.value', '013')
            .wait(500)
            // Select "Image Url" Input field
            .get('input').eq(8).focus()
            // Type Image Url
            .type('https://3.bp.blogspot.com/-dIr9mCqO1lA/Ui1TyEPeq_I/AAAAAAAAEVg/mU2r0oCzO-c/s1600/American-white-Pelican.jpg')
            .should('have.value', 'https://3.bp.blogspot.com/-dIr9mCqO1lA/Ui1TyEPeq_I/AAAAAAAAEVg/mU2r0oCzO-c/s1600/American-white-Pelican.jpg')
            .wait(500)
        // Click "Submit" button
        cy.get('button').contains('Submit').first().click()
            .wait(500)
            // Click "Back to Feed" button
            .get('button').contains('Back').first().click()
            .wait(500)

        // Post Feed home page
        //cy.visit('http://localhost:4200/feed').wait(500)

        // Select Create Post modal to open Post creation menu
        cy.get('h3').contains('What').first().click()

        // Select text content input box, type into it and verify that the value has been updated
        cy.get('textarea').first().focus()
            .type('Cypress Post NOV 22')
            .should('have.value', 'Cypress Post NOV 22')

        // Click Post button
        cy.get('button').eq(0).click()
            .wait(500)

        cy.get('h3').contains('What').first().click()

        // Select image url input field, type into it and verify that the value has been updated
        cy.get('input').eq(1).focus()
            .type('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.whatgrowsthere.com%2Fgrow%2Fwp-content%2Fuploads%2F2011%2F12%2FDSC_0612.jpg&f=1&nofb=1')
            .should('have.value', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.whatgrowsthere.com%2Fgrow%2Fwp-content%2Fuploads%2F2011%2F12%2FDSC_0612.jpg&f=1&nofb=1')

        // Click Post button
        cy.get('button').eq(0).click()
            .wait(500)

        cy.get('h3').contains('What').first().click()

        // Create a Post with both text and image inputs
        cy.get('textarea').first().focus()
            .type('Cypress Post with Image 22')
            .should('have.value', 'Cypress Post with Image 22')

        cy.get('input').eq(1).focus()
            .type('https://itcraftapps.com/wp-content/uploads/2019/12/Cypress-Testing-Tool.png')
            .should('have.value', 'https://itcraftapps.com/wp-content/uploads/2019/12/Cypress-Testing-Tool.png')

        cy.get('button').eq(0).click()
            .wait(500)

        // Select Comments button to open Comments creation menu
        // Assumes the first Post on Feed has zero Comments    
        cy.get('p').contains('Comments').first().click()

        // Select comment text input field on first Post in Feed, type into it and validate changes     
        cy.get('input').eq(2).focus()
            .type('Cypress Comment')
            .should('have.value', 'Cypress Comment')
            // Press enter key to post comment
            .type('{enter}')
            .wait(500)

        // Select comment image url input field on first Post in Feed, type into it and validate changes
        cy.get('input').eq(3).focus()
            .type('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F43294-animals-duck-birds.jpg&f=1&nofb=1')
            .should('have.value', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F43294-animals-duck-birds.jpg&f=1&nofb=1')
            // Press enter key to post comment
            .type('{enter}')
            .wait(500)

        // Create comment with both text and image under first Post in Feed
        cy.get('input').eq(2).focus()
            .type('A picture of geese')
            .should('have.value', 'A picture of geese')
            .get('input').eq(3).focus()
            .type('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnews.umanitoba.ca%2Fwp-content%2Fuploads%2Fsites%2F1%2Fnggallery%2Ftache-arts-complex-geese%2FGoose-7.jpg&f=1&nofb=1')
            .should('have.value', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnews.umanitoba.ca%2Fwp-content%2Fuploads%2Fsites%2F1%2Fnggallery%2Ftache-arts-complex-geese%2FGoose-7.jpg&f=1&nofb=1')
            .type('{enter}')
            .wait(500)



        // Like the first Post in Feed, assume you have not liked previously
        // Click Like button
        cy.get('i').eq(2).click()
            .wait(500)
            // Check value of Likes counter, should be 1
            .get('p').eq(2).should('have.text', ' 1 ')
            .wait(500)
            // Check value of Disikes counter, should be 0
            .get('p').eq(3).should('have.text', ' 0 ')
            .wait(500)

        // Unlike first Post in Feed, assume you have liked previously
        cy.get('i').eq(2).click()
            .wait(500)
            // Check value of Likes counter, should be 0
            .get('p').eq(2).should('have.text', ' 0 ')
            .wait(500)
            // Check value of Disikes counter, should be 0
            .get('p').eq(3).should('have.text', ' 0 ')
            .wait(500)

        // Dislike first Post in Feed, assume you have not disliked previously
        cy.get('i').eq(3).click()
            .wait(500)
            // Check value of Likes counter, should be 0
            .get('p').eq(2).should('have.text', ' 0 ')
            .wait(500)
            // Check value of Disikes counter, should be 1
            .get('p').eq(3).should('have.text', ' 1 ')
            .wait(500)

        // Undislike first Post in Feed, assume you have not disliked previously
        cy.get('i').eq(3).click()
            .wait(500)
            // Check value of Likes counter, should be 0
            .get('p').eq(2).should('have.text', ' 0 ')
            .wait(500)
            // Check value of Disikes counter, should be 0
            .get('p').eq(3).should('have.text', ' 0 ')
            .wait(500)

        // // Like first Post in Feed, assume you have disliked previously
        // // Dislike Post
        // cy.get('i').eq(4).click()
        //     .wait(500)
        //     // Like Post
        //     .get('i').eq(3).click()
        //     // Check value of Likes counter, should be 1
        //     .get('p').eq(11).should('have.text', ' 1 ')
        //     .wait(500)
        //     // Check value of Disikes counter, should be 0
        //     .get('p').eq(12).should('have.text', ' 0 ')
        //     .wait(500)

        // // Dislike first Post in Feed, assume you have liked previously
        // // Like Post
        // cy.get('i').eq(3).click()
        //     .wait(500)
        //     // Dislike Post
        //     .get('i').eq(4).click()
        //     // Check value of Likes counter, should be 0
        //     .get('p').eq(11).should('have.text', ' 0 ')
        //     .wait(500)
        //     // Check value of Disikes counter, should be 1
        //     .get('p').eq(12).should('have.text', ' 1 ')
        //     .wait(500)

        // Like first Comment on first Post in Feed, assume you have not liked previously
        cy.get('i').eq(4).click()
            .wait(500)
            // Check value of Likes counter, should be 1
            .get('p').eq(7).should('have.text', ' 1 ')
            .wait(500)
            // Check value of Disikes counter, should be 0
            .get('p').eq(8).should('have.text', ' 0 ')
            .wait(500)

        // Unlike first Comment on first Post in Feed, assume you have liked previously
        cy.get('i').eq(4).click()
            .wait(500)
            // Check value of Likes counter, should be 0
            .get('p').eq(7).should('have.text', ' 0 ')
            .wait(500)
            // Check value of Disikes counter, should be 0
            .get('p').eq(8).should('have.text', ' 0 ')
            .wait(500)

        // Dislike first Comment on first Post in Feed, assume you have not disliked previously
        cy.get('i').eq(5).click()
            .wait(500)
            // Check value of Likes counter, should be 0
            .get('p').eq(7).should('have.text', ' 0 ')
            .wait(500)
            // Check value of Disikes counter, should be 1
            .get('p').eq(8).should('have.text', ' 1 ')
            .wait(500)

        // Undislike first Comment on first Post in Feed, assume you have disliked previously
        cy.get('i').eq(5).click()
            .wait(500)
            // Check value of Likes counter, should be 0
            .get('p').eq(7).should('have.text', ' 0 ')
            .wait(500)
            // Check value of Disikes counter, should be 0
            .get('p').eq(8).should('have.text', ' 0 ')
            .wait(500)

        // // Like first Comment on first Post in Feed, assume you have disliked previously
        // cy.get('i').eq(6).click()
        //     .wait(500)
        // cy.get('i').eq(5).click()
        //     .wait(500)
        //     // Check value of Likes counter, should be 1
        //     .get('p').eq(16).should('have.text', ' 1 ')
        //     .wait(500)
        //     // Check value of Disikes counter, should be 0
        //     .get('p').eq(17).should('have.text', ' 0 ')
        //     .wait(500)

        // // Dislike first Comment on first Post in Feed, assume you have liked previously
        // cy.get('i').eq(5).click()
        //     .wait(500)
        // cy.get('i').eq(6).click()
        //     .wait(500)
        //     // Check value of Likes counter, should be 0
        //     .get('p').eq(16).should('have.text', ' 0 ')
        //     .wait(500)
        //     // Check value of Disikes counter, should be 1
        //     .get('p').eq(17).should('have.text', ' 1 ')
        //     .wait(500)


        // Log out of Account
        cy.get('.hamburger-container').click()
            // Click "Log Out" 
            .get('a').contains('Log').first().click()
            
    })

})