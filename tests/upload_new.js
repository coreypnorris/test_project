module.exports = {
    'Homepage Text' : function (browser) {
        browser
            .url('http://admin:111111@localhost:3000/upload')
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', 'Upload a new comic')
            .end();
    }
};
