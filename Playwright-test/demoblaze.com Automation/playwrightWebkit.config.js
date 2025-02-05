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
  browserName: 'webkit',
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


module.exports = config;