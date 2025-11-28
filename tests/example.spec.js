
import { test, expect } from '@playwright/test';

// Add slow motion for smooth run
test.use({
  launchOptions: {
    slowMo: 500   // each step 400ms slower
  }
});

// 🔥 ADD TIMEOUT HERE (40 seconds)
test.setTimeout(40000);

test('test', async ({ page }) => {

  await page.goto('https://qa-account.simplifysandbox.net/');

  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('Admin@Simplify');
  await page.locator('#sign-in').click();

  // 3. Search RFx Program in search box

  await page.getByRole('searchbox', { name: 'Search..' }).click();
  await page.getByRole('searchbox', { name: 'Search..' }).fill('RFx Pro');

  // 4. Open 'RFx Programme' from list

  await page.locator('#listingwrapper').getByText('RFx Programme').click();

  // 5. Navigate → SOW Section

  await page.getByRole('button', { name: 'dashboard Navigate to' }).click();
  await page.locator('a').filter({ hasText: 'SOW' }).nth(1).click();

  // 6. Click on Create SOW button

  await page.getByRole('link', { name: ' Create SOW' }).click();

  // 7. Select SOW Type = Fixed Bid

  await page.locator('#sow-type').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Fixed Bid' }).click();

  // 8. Select SOW Manager = Joh Dell

  await page.locator('div').filter({ hasText: /^Select$/ }).first().click();
  await page.getByRole('option', { name: 'Joh Dell' }).click();

  // 9. Select Hierarchy = Nursing

  await page.locator('#hierarchy').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Nursing', exact: true }).click();

  // 10. Job Posting Template Selection (ICU)

  await page.locator('#job-posting-templates .ng-input input').click();
  await page.getByRole('option', { name: 'ICU' }).click();

  // 11. Checklist Selection

  await page.locator('#sow-checklist .ng-input input').click();
  await page.getByRole('option', { name: 'Checklist For Assignment' }).click();

  // 12. End Date Selection from Calendar

  await page.locator('#end-date').getByRole('combobox', { name: 'MM/DD/YYYY' }).click();
  await page.getByText('30').nth(1).click();
  // 13. Select Currency (INR)

  await page.locator('#sow-currency .ng-input input').click();
  await page.getByRole('option', { name: 'INR (₹)' }).click();

  // 14. Select Vendor (AkshayVMS)

  await page.locator('#sow-vendor .ng-input input').click();
  await page.getByRole('option', { name: 'AkshayVMS' }).click();

  // 15. Enter PO Number and External Reference ID

  await page.getByRole('textbox', { name: 'Enter PO Number' }).fill('11');
  await page.getByRole('textbox', { name: 'External Reference ID' }).fill('21');

  // 16. Foundation Data Dropdown selection

  await page.locator('#foundation-data-ids-1 .ng-arrow-wrapper').click();
  await page.getByText('MDT to All Additional MDT').click();
  // 17. Select Module Type = SOW

  await page.locator('div').filter({ hasText: /^Select$/ }).nth(1).click();
  await page.getByRole('option', { name: 'SOW' }).click();
  // 18. Select Date (from another calendar)

  await page.getByRole('combobox', { name: 'Date' }).click();
  await page.getByText('28').nth(1).click();
  // 19. Get Started → form submission

  const getStartedBtn = page.getByRole('button', { name: /Get Started/ });
  await expect(getStartedBtn).toBeEnabled();
  await getStartedBtn.click();

  // 20. Create Milestone

  await page.getByRole('button', { name: 'add Create Milestones' }).click();
  // 21. Enter Milestone Title

  await page.getByRole('textbox', { name: 'Enter Milestone Title' }).fill('hr');

  // 22. Select Milestone Date

  await page.getByRole('combobox', { name: 'MM/DD/YYYY' }).nth(1).click();
  await page.getByText('29').nth(1).click();

  // -----------------------------------------
  // 23. Save Milestone
  // -----------------------------------------


  await page.getByRole('button', { name: 'Create Milestone', exact: true }).click();

  // -----------------------------------------
  // 24. Save SOW as Draft
  // -----------------------------------------

  await page.getByRole('button', { name: 'check_circle Save as a Draft' }).click();
});
