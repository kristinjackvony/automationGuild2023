module.exports = {
    testConcurrency: 1,
    apiKey: 'APPLITOOLS_API_KEY',
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
    ],
    // set batch name to the configuration
    batchName: 'Automation Guild Visual Test'
}