Use node-inspector to debug
---
1. Use `debugger;` to set a breakpoint in the .js file you want to debug.
 
2. Start the application or file by appending `node-debug` to the command.

EX: Instead of `nodemon app.js` to start the app use `node-debug nodemon app.js` with a `debugger;` breakpoint set in the app.js.


Switching between different environments
---
`SET NODE_ENV=development`
`SET NODE_ENV=production`


4 RESTful verbs:
---
GET
POST
PUT
DELETE

7 RESTful actions:
---
index
new
create
edit
update
show
destroy


Starting, Killing, and Updating Selenium
---
Find process ID by port 4444
`netstat -o -n -a | findstr 0.0:4444`
Kill proccess by process ID
`taskkill /F /PID 5148`
Start Selenium
`webdriver-manager update`
Update Selenium
`webdriver-manager start`

Protractor test tips
---
`https://github.com/sakshisingla/Protractor-Non-Angular-Tests/wiki/Creating-test-scripts-using-Protractor-for-non-angular-application`
- Sleep
`browser.driver.sleep(5000);`