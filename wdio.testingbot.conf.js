import * as base from './wdio.conf.js'

export const config = {
  ...base.config,
  hostname: 'hub.testingbot.com',
  port: 443,
  path: '/wd/hub',
  user: process.env.TESTINGBOT_KEY,
  key: process.env.TESTINGBOT_SECRET,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Samsung Galaxy S21',
    'appium:platformVersion': '12',
    'appium:app': 'testingbot://c67fb029dfd0022110130f14',  // or your .apk upload URL
    'appium:automationName': 'UiAutomator2',
  }]
};
