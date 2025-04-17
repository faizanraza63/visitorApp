import * as base from './wdio.conf.js'

console.log('TestingBot credentials:', process.env.TB_KEY, process.env.TB_SECRET);

export const config = {

  user: process.env.TB_KEY,
  key: process.env.TB_SECRET,
  
  ...base.config,
  protocol: 'https',
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
    'appium:deviceName': 'Samsung Galaxy S21',
    'appium:platformVersion': '11',
    'appium:app': 'tb://f19587093a35dd4b5f15ac6f',  // or your .apk upload URL
    'appium:automationName': 'UiAutomator2',
    'tb:options': {
     build: 'TB Build-01',
     name: 'VisitorApp Tests',
     tags: ['azure', 'appium', 'android']
  },
  }],
};
