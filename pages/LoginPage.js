// 🔥 Login Page POM
export class LoginPage {
  constructor(page) {
    this.page = page;

    // 🎯 Locators
    this.emailInput = page.getByRole('textbox', { name: 'Enter Your Email Address Or' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Your Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign In', exact: true });
  }

  // 🔹 Open Login URL
  async goto() {
    await this.page.goto('https://qa-account.simplifysandbox.net/');
  }

  // 🔹 Perform Login Action
  async login(email, password) {
    await this.emailInput.click();
    await this.emailInput.fill(email);

    await this.passwordInput.click();
    await this.passwordInput.fill(password);

    await this.signInBtn.click(); // ✔ Login Click
  }
}
