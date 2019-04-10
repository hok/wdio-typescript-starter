exports.config = {
    runner: 'local',
    specs: [
        'src/specs/**/*.ts'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [
      {
        maxInstances: 1,
        browserName: 'firefox',
      },
      {
        maxInstances: 1,
        browserName: 'chrome',
      },
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 1,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    specFileRetries: 1,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: [
          'tsconfig-paths/register',
      ],
    },
    //
    // onPrepare: function (config, capabilities) {
    // },
    // beforeSession: function (config, capabilities, specs) {
    // },
    before: function (capabilities, specs) {
      require('ts-node').register({ files: true });
    },
    // beforeCommand: function (commandName, args) {
    // },
    // beforeSuite: function (suite) {
    // },
    // beforeTest: function (test) {
    // },
    // beforeHook: function () {
    // },
    // afterHook: function () {
    // },
    // afterTest: function (test) {
    // },
    // afterSuite: function (suite) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
