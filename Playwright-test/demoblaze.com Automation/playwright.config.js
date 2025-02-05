// @ts-check
const { devices } = require('@playwright/test');

const config ={
  testDir:'./tests',
  /* directorio where to run the test*/
  timeout: 30*1000,
  /* time in which the runt is declarate as fail*/
  expect:{
    timeout:5000
  },
  /* something about assertions // if you dont find specif you like or you want we will wait 5 seconds for each expect or assention and afterthat it will be fail */
 reporter:'html',
 /* how do you want to report your test againts the result */
 use: {
  browserName: 'chromium',
  /* Add the 'browserName' property to specify the browser to use */
  headless: false,
  /* Optionally, you can set the 'headless' property to control whether the browser runs in headless mode or not */
  viewport: { width: 1280, height: 720 },
  /* Optionally, you can set the 'viewport' property to define the browser's viewport size */
  screenshot:'on',
  
  trace:'retain-on-failure'
}
/* all the details like browser */
}

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
// module.exports = defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://127.0.0.1:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

  

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

module.exports = config;
