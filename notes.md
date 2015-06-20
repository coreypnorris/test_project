--- Use node-inspector to debug

1. Use `debugger;` to set a breakpoint in the .js file you want to debug.
 
2. Start the application or file by appending `node-debug` to the command.

EX: Instead of `nodemon app.js` to start the app use `node-debug nodemon app.js` with a `debugger;` breakpoint set in the app.js.

--- Running the Nightwatch tests

1. Make sure the app is running.

2. Start the selenium server in a separate tab with this command
`java -jar bin\selenium-server-standalone-2.46.0.jar -Dwebdriver.chrome.driver="C:\Users\corey_000\Documents\Code\public_comics\bin\chromedriver.exe"`

3. Run the tests in the tests folder with this command
`node nightwatch.js`

--- Switching between different environments
`SET NODE_ENV=development`


--- 4 RESTful verbs:
GET
POST
PUT
DELETE

--- 7 RESTful actions:
index
new
create
edit
update
show
destroy
