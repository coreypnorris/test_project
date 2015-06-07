--- Running the Nightwatch tests

1. Start the selenium server with this command
`java -jar bin\selenium-server-standalone-2.46.0.jar -Dwebdriver.chrome.driver="C:\Users\corey_000\Documents\Code\public_comics\bin\chromedriver.exe"`

2. Run the tests in the tests folder with this command
`node nightwatch.js`

-- Switching between different environments
`SET NODE_ENV=development`
