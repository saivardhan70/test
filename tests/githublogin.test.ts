import { test, expect } from '@playwright/test';


test.beforeEach(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  // Now you can perform your test actions on the page
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('test');
  await page.getByRole('textbox', { name: 'Password' }).fill('vardhan');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  console.log('success  PW')
});