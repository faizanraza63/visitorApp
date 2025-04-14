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
    'appium:app': 'https://github.com/Noman9899/VisitorApp/releases/download/version1.0.0/VisitorApp.apk',  // or your .apk upload URL
    'appium:automationName': 'UiAutomator2',
  }]
};
