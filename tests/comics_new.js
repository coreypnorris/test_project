module.exports = {
   'Comics/New Text' : function (browser) {
       browser
           .url('http://admin:111111@localhost:8080/comics/new')
           .waitForElementVisible('body', 1000)
           .assert.containsText('body', 'Upload a new comic')
           .end();
   }
};
