Using node-inspector to debug
---
1. Use `debugger;` to set a breakpoint in the .js file you want to debug.

2. Start the application or file by appending `node-debug` to the command.

EX Instead of `nodemon app.js` to start the app use `node-debug nodemon app.js` with a `debugger;` breakpoint set in the app.js.



4 RESTful verbs:
---
1. GET
2. POST
3. PUT
4. DELETE

7 RESTful actions:
---
1. Index
2. New
3. Create
4. Edit
5. Update
6. Show
7. Destroy



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
