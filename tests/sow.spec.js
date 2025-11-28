// tests/sow.spec.js

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SowPage } from '../pages/SowPage';

// 🔥 Slow motion enabled (600ms delay)
test.use({
  launchOptions: { slowMo: 600 }
});

// Test timeout set to 50 seconds
test.setTimeout(180000);

test('Create SOW - Full Flow Using POM', async ({ page }) => {

  // 🟦 Create page objects
  const login = new LoginPage(page);
  const sow = new SowPage(page);

  // 🔵 Step 1: Login
  await login.goto();
  await login.login("saishnehe48@gmail.com", "Client@8010");

  // 🔵 Step 2: Open Create SOW
  await sow.openCreateSow();

  // 🔵 Step 3: Fill All SOW Details
  await sow.fillGeneralDetails();
  await sow.fillPO();

  // 🔵 Step 4: Add Milestone
  await sow.createMilestone();

  // 🔵 Step 5: Add Deliverable
  await sow.createDeliverable();

  // 🔵 Step 6: Save Draft
  await sow.saveDraft();
});
