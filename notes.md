Using node-inspector to debug
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



Using MongoDB via console
---
- `mongod` Starts the server
- `mongo shell` connect to the MongoDB console
- `exit` exit the MongoDB console


While in the MongoDB console
---
* `show dbs` get list of available databases
* `use name_of_database` connect to a database
* `show collections` get list of collections in the current database


Create
--
You can use three commands to create documents in MongoDB:

* Insert: `db.todos.insert({"title":"Write a post", "user": "nikola"})`
* Update: usually used to update an existing document, but if you set the upsert flag, it will create a new document if it does not exist:
`db.todos.update({
  "user": "nikola"
  },
  {
    "title": "Buy Bitcoins",
    "user": "nikola"
  },
  {
    upsert: true
  }
)`
* Save: creates a new document even if the exact one (content wise) exists:
`db.todos.save({"title":"Write a post", "user": "nikola"})`


Read
--
* To find all the documents of the todos collection, execute:
`db.todos.find()`

* To find all the todos of the user nikola execute:
`db.todos.find({ "user": "nikola" })`

* To find all todos that were created by either nikola or josipa, you can use the $in operator:
`db.todos.find({ "user": { $in: ["josipa", "nikola"] } })`

* Another way to find all todos that were created by either nikola or josipa:
`db.todos.find( { $or: [{ "user": "nikola" }, { "user": "josipa" }] })`

* To find all todos that were created by nikola and have a priority greater than 3:
`db.todos.find({ "user": "nikola", "priority": { $gt: 3 } })`


Update
--
* The update() method takes three arguments to update existing documents: selection that indicates which documents to update, update statement, and the options object.

In the following example, the first argument is telling MongoDB to look for all the documents created by nikola (in the todos collection), the second argument tells it to update the title field, and the third is forcing it to execute the update operation on all the documents it finds, since the default behavior is to update a single document:


Delete
--
* To remove all the documents from the todos collection execute:
`db.todos.remove()`

* To remove the first document from the todos collection made by user nikola execute:
`db.todos.remove({ "user": "nikola" }, true)`

* In order to remove all of the documents made by nikola in the todos collection just omit the true flag.
`db.todos.update({
  "user": "nikola"
  },
  {
    $set: {
      "title": "Postpone blog post"
    }
  },
  {
    multi: true
  }
)`
