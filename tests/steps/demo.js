const { Given,Then, When } =require ('@cucumber/cucumber');
const { expect } = require ("@playwright/test");

Given('I go to Playwright', async ()=> {
  await page.goto('https://playwright.dev/',{timeout: 100000});
});

When('I Check the Title', async  ()=> {
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');

});

Then('I Checked For the footer', async  ()=> {
  const footer_text = await page.innerText('div[class="footer__copyright"]')
  expect(footer_text).toBe('Copyright © 2023 Microsoft');
});

Given('I am on the Orange HRM login page', async () => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I enter my username as {string}', async (username) => {
  // Enter the username
  await page.getByRole('textbox', { name: 'username' }).fill(username);
});

When('I enter my password as {string}', async (password) => {
  // Enter the password
  await page.getByRole('textbox', { name: 'password' }).fill(password);
});

When('I click the login button', async () => {
  // Click the login button
  await Promise.all([
    page.waitForNavigation(), // Wait for the page to navigate to the next page
    page.getByRole('button', { name: /Login/i }).click()
  ]);
});

Then('I should be redirected to the dashboard page', async () => {
  // Verify successful login by checking the URL
  const url = await page.url();
  expect(url).toContain('dashboard');
});

Then('I should see the title as {string}', async (expectedTitle) => {
  // Verify the title of the page
  const pageTitle = await page.title();
  expect(pageTitle).toBe(expectedTitle);
  // Use Of Locator Object to check Playwright-Locator assertion is working as expected.
  await expect(page.locator('div.oxd-topbar-header-title > span > h6')).toHaveText('Dashboard');
});

