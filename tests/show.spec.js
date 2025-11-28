import { test, expect } from '@playwright/test';

// Add slow motion for smooth run
test.use({
  launchOptions: {
    slowMo: 600   // each step 400ms slower
  }
});

// 🔥 ADD TIMEOUT HERE (40 seconds)
test.setTimeout(50000);

test('test', async ({ page }) => {
  await page.goto('https://qa-account.simplifysandbox.net/');
  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Email Address Or' }).fill('saishnehe48@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Password' }).fill('Client@8010');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('a').filter({ hasText: 'SOW' }).nth(1).click();
  await page.getByRole('link', { name: ' Create SOW' }).click();
  await page.locator('.ng-arrow-wrapper').first().click();
  await page.getByRole('option', { name: 'Fixed Bid' }).click();
  await page.locator('#managed-by-msp').getByRole('textbox').click();
  await page.getByRole('option', { name: 'SELF MANAGED' }).click();
  await page.locator('#hierarchy').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Baap company' }).click();
  await page.locator('div').filter({ hasText: /^Select$/ }).nth(1).click();
  await page.getByText('Fixed Bid Temp T-OFF').click();
  await page.locator('#job-posting-templates > .ng-select-container > .ng-value-container > .ng-input > input').click();
  await page.getByRole('option', { name: 'backend' }).click();
  await page.locator('#sow-checklist > .ng-select-container > .ng-value-container > .ng-input > input').click();
  await page.getByText('SOW - Checklist').click();
  await page.locator('#end-date').getByRole('combobox', { name: 'MM/DD/YYYY' }).click();
  await page.getByText('30').nth(1).click();
  await page.locator('#sow-currency > .ng-select-container > .ng-value-container > .ng-input > input').click();
  await page.getByRole('option', { name: 'INR (₹)' }).click();
  await page.getByRole('textbox', { name: 'Enter PO Number' }).click();
  await page.getByRole('textbox', { name: 'Enter PO Number' }).fill('11');
  await page.getByRole('textbox', { name: 'External Reference ID' }).click();
  await page.getByRole('textbox', { name: 'Enter PO Number' }).fill('111');
  await page.getByRole('textbox', { name: 'External Reference ID' }).fill('1');
  await page.getByRole('textbox', { name: 'External Reference ID' }).click();
  await page.getByRole('textbox', { name: 'External Reference ID' }).fill('121');
  await page.getByRole('button', { name: 'Get Started ' }).click();
  await page.getByRole('button', { name: 'add Create Milestones' }).click();
  await page.getByRole('textbox', { name: 'Enter Milestone Title' }).click();
  await page.getByRole('textbox', { name: 'Enter Milestone Title' }).fill('hii');
  await page.getByRole('combobox', { name: 'MM/DD/YYYY' }).nth(1).click();
  await page.getByText('29').nth(1).click();
  await page.getByRole('button', { name: 'Create Milestone', exact: true }).click();
  await page.getByRole('button', { name: 'add Create Standalone' }).click();
  await page.getByRole('textbox', { name: 'Enter Deliverable Title' }).click();
  await page.getByRole('textbox', { name: 'Enter Deliverable Title' }).fill('google');
  await page.locator('#deliverable-type').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Legal' }).click();
  await page.getByRole('button', { name: 'Create Standalone Deliverable', exact: true }).click();
  await page.getByRole('button', { name: 'check_circle Save as a Draft' }).click();
});