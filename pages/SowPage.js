// pages/SowPage.js

// 🔥 SOW Page POM
export class SowPage {
  constructor(page) {
    this.page = page;
  }

  // 🔹 Open Create SOW Page
  async openCreateSow() {
    await this.page.locator('a').filter({ hasText: 'SOW' }).nth(1).click();
    await this.page.getByRole('link', { name: ' Create SOW' }).click();
  }

  // 🔹 Fill Basic SOW Details
  async fillGeneralDetails() {

    // Select SOW Type
    await this.page.locator('.ng-arrow-wrapper').first().click();
    await this.page.getByRole('option', { name: 'Fixed Bid' }).click();

    // Select Managed By
    await this.page.locator('#managed-by-msp').getByRole('textbox').click();
    await this.page.getByRole('option', { name: 'SELF MANAGED' }).click();

    // Hierarchy
    await this.page.locator('#hierarchy').getByRole('textbox').click();
    await this.page.getByRole('option', { name: 'Baap company' }).click();

    // Template
    await this.page.locator('#sow-template').click();
    await this.page.getByText('Fixed Bid Temp T-OFF').click();


    // Job Posting Template
    await this.page.locator('#job-posting-templates input').click();
    await this.page.getByRole('option', { name: 'backend' }).click();

    // Checklist
    await this.page.locator('#sow-checklist input').click();
    await this.page.getByText('SOW - Checklist').click();

    // End Date
    await this.page.locator('#end-date').getByRole('combobox').click();
    await this.page.getByText('30').nth(1).click();

    // Currency
    await this.page.locator('#sow-currency input').click();
    await this.page.getByRole('option', { name: 'INR (₹)' }).click();
  }

  // 🔹 Fill PO Details
  async fillPO() {
    await this.page.locator('#sow-po-number').fill('11');
    await this.page.locator('#external-reference-id').fill('121');

  }

  // 🔹 Add Milestone
  async createMilestone() {
    await this.page.getByRole('button', { name: 'Get Started ' }).click();
    await this.page.getByRole('button', { name: 'add Create Milestones' }).click();

    // Milestone Title
    await this.page.getByRole('textbox', { name: 'Enter Milestone Title' }).fill('hii');

    // Date picker
    await this.page.getByRole('combobox', { name: 'MM/DD/YYYY' }).nth(1).click();
    await this.page.getByText('29').nth(1).click();

    // Create Milestone
    await this.page.getByRole('button', { name: 'Create Milestone', exact: true }).click();
  }

  // 🔹 Add Deliverable
  async createDeliverable() {
    await this.page.getByRole('button', { name: 'add Create Standalone' }).click();

    await this.page.getByRole('textbox', { name: 'Enter Deliverable Title' }).fill('google');

    // Deliverable Type
    await this.page.locator('#deliverable-type').getByRole('textbox').click();
    await this.page.getByRole('option', { name: 'Legal' }).click();

    // Create Deliverable
    await this.page.getByRole('button', { name: 'Create Standalone Deliverable', exact: true }).click();
  }

  // 🔹 Save Draft
  async saveDraft() {
    await this.page.getByRole('button', { name: 'check_circle Save as a Draft' }).click();
  }
}
