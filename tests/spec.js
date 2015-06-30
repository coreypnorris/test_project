describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.driver.get('http://localhost:3000');
        expect(browser.driver.getTitle()).toEqual('Public Comics');
    });
});