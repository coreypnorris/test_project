Using node-inspector to debug
---
1. Use `debugger;` to set a breakpoint in the .js file you want to debug.
2. Start the application or file by appending `node-debug` to the command.
EX Instead of `nodemon server.js` to start the app use `node-debug server.js` with a `debugger;` breakpoint set in the server.js file.



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



New database entity workflow
--
1. Create the schema
2. Create the form
3. Wire the form to the appropriate controller actions
4. Render the data from the database to the appropriate pages



Starting, Killing, and Updating Selenium
---
Find process ID by port 4444
`netstat -o -n -a | findstr 0.0:4444`
Kill proccess by process ID
`taskkill /F /PID 5148`
Update Selenium
`webdriver-manager update`
Start Selenium
`webdriver-manager start`



Protractor test tips
---
`https://github.com/sakshisingla/Protractor-Non-Angular-Tests/wiki/Creating-test-scripts-using-Protractor-for-non-angular-application`
- Sleep
`browser.driver.sleep(5000);`
