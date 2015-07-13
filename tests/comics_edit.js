module.exports = {
   'Comics/Edit Text' : function (browser) {
       browser
           .url('http://admin:111111@localhost:8080/comics/edit')
           .waitForElementVisible('body', 1000)
           .assert.containsText('body', 'Edit uploaded comics.')
           .end();
   }
};
