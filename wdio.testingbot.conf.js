import * as base from './wdio.conf.js'

export const config = {
  ...base.config,
  hostname: 'hub.testingbot.com',
  port: 443,
  path: '/wd/hub',
  user: process.env.TB_KEY,
  key: process.env.TB_SECRET,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Samsung Galaxy S21',
    'appium:platformVersion': '12',
    'appium:app': 'tb://f19587093a35dd4b5f15ac6f',  // or your .apk upload URL
    'appium:automationName': 'UiAutomator2',
  }]
};
