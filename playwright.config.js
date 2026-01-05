// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 2, 
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  {
  name: 'Google Chrome',
  use: { ...devices['Desktop Chrome'], channel: 'chrome' },
},
    {
      name: 'Safari',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});