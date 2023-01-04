# automationGuild2023
This is the repository for the code used in my Automation Guild 2023 presentation: Rounding Out the Automation Test Wheel With Cypress.

To use the repo, clone it and then run npm i to install everything needed to run the automation.

In order to run the visual tests, you will need to create a free Applitools account and then get your Applitools api key: https://applitools.com/docs/topics/overview/obtain-api-key.html

Once you have your API key, replace the APPLITOOLS_API_KEY text with your API key in the applitools.config.js file. After you have run the visual tests for the first time, you will need to log into your Applitools console and approve and save the screenshots.

To run all of the tests in the repo, use the script npm run test.  To run just one set of tests, use a command like this: npm run visualTests. You can find all of the scripts in lines 7-13 of the package.json file.

Enjoy!
