import * as base from './wdio.local.conf.js'

exports.config = {
  ...base.config,
  hostname: 'hub.testingbot.com',
  port: 443,
  path: '/wd/hub',
  user: process.env.TESTINGBOT_KEY,
  key: process.env.TESTINGBOT_SECRET,

  capabilities: [{
    platformName: 'Android',
    deviceName: 'Samsung Galaxy S21',
    platformVersion: '12',
    app: 'https://docs.google.com/uc?export=download&id=1_JT_H8U_jWIySRk-x-5bXyo5ltZ8NfNV',  // or your .apk upload URL
    automationName: 'UiAutomator2',
  }]
};
