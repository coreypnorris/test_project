module.exports = {
    'Homepage Text' : function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', 'Public Comics')
            .end();
    }
};