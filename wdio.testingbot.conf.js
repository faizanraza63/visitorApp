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
    'appium:app': 'https://www.dropbox.com/scl/fi/4p33k0vi9pi5cchpu0crq/VisitorApp.apk?rlkey=w9md95pgewo3bjr3og6x78ikg&st=u2wrfcww&dl=1',  // or your .apk upload URL
    'appium:automationName': 'UiAutomator2',
  }]
};
