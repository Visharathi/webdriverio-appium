describe('My android application', () => {
    it('should login with valid credentials', async () => {
        await(await $('~Converter')).click()
        browser.pause(3000)
    })
})