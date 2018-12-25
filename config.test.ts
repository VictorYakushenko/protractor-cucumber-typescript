import { browser, Config } from 'protractor';
import { exec } from 'child_process';

export let config: Config = {
 SELENIUM_PROMISE_MANAGER: false,

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'https://www.arkadium.com/',
  framework: 'custom',  
  frameworkPath: require.resolve('protractor-cucumber-framework'),  
  specs: ['./../src/features/**/*.feature'],  
  cucumberOpts: {
    compiler: "ts:ts-node/register",  
    format: "json:./cucumber_report.json",
    require: ["./../dist/src/features/**/*.js"], 
    strict: true, 
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize(); 
  },
  onComplete: () => {
    process.platform === "win32" ?
    exec("cat .\\cucumber_report.json | .\\node_modules\\.bin\\cucumber-junit > .\\cucumber_report.xml")
    : exec("cat ./cucumber_report.json | ./node_modules/.bin/cucumber-junit > ./cucumber_report.xml");
  }
}
