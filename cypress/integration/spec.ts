/// <reference types="cypress" />

describe('My First Test', () => {
    it('Gets, types and asserts', () => {

        // Post Feed home page
        cy.visit('http://localhost:4200/')

        // Select Create Post modal to open Post creation menu
        cy.get('h3').contains('What').first().click()

        // Select text content input box, type into it and verify that the value has been updated
        cy.get('textarea').first().focus()
            .type('Cypress Post NOV 22')
            .should('have.value', 'Cypress Post NOV 22')

        // Click Post button
        cy.get('button').eq(1).click()
            .wait(500)

        cy.get('h3').contains('What').first().click()

        // Select image url input field, type into it and verify that the value has been updated
        cy.get('input').eq(1).focus()
            .type('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.whatgrowsthere.com%2Fgrow%2Fwp-content%2Fuploads%2F2011%2F12%2FDSC_0612.jpg&f=1&nofb=1')
            .should('have.value', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.whatgrowsthere.com%2Fgrow%2Fwp-content%2Fuploads%2F2011%2F12%2FDSC_0612.jpg&f=1&nofb=1')

        // Click Post button
        cy.get('button').eq(1).click()
            .wait(500)

        cy.get('h3').contains('What').first().click()

        // Create a Post with both text and image inputs
        cy.get('textarea').first().focus()
            .type('Cypress Post with Image 22')
            .should('have.value', 'Cypress Post with Image 22')

        cy.get('input').eq(1).focus()
            .type('https://itcraftapps.com/wp-content/uploads/2019/12/Cypress-Testing-Tool.png')
            .should('have.value', 'https://itcraftapps.com/wp-content/uploads/2019/12/Cypress-Testing-Tool.png')

        cy.get('button').eq(1).click()
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
    })
})