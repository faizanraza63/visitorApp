import * as base from './wdio.conf.js'

export const config = {
  ...base.config,
  hostname: 'hub.testingbot.com',
  port: 443,
  path: '/wd/hub',


  services: ['testingbot'],
testingbot: {
  key: process.env.TB_KEY,
  secret: process.env.TB_SECRET,
},

connectionRetryTimeout: 180000, // 3 minutes
connectionRetryCount: 3,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '12',
    'appium:app': 'tb://f19587093a35dd4b5f15ac6f',  // or your .apk upload URL
    'appium:automationName': 'UiAutomator2',
  }],
};
