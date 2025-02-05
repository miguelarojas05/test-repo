class SignUp {
    constructor(page) {
      this.page = page;
    }
    async goTopage(){
  
      await this.page.goto("https://demoblaze.com");
  
    }
  
    async signUPWithCodegen() {
        
  await this.page.getByRole('link', { name: 'Sign up' }).click();
  await this.page.getByLabel('Username:').click();
  await this.page.getByLabel('Username:').fill('pepito2');
  await this.page.getByLabel('Password:').click();
  await this.page.getByLabel('Password:').fill('pepito2');
  this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await this.page.getByRole('button', { name: 'Sign up' }).click();
  await this.page.getByLabel('Username:').click();
  await this.page.getByLabel('Username:').fill('pepito');
  await this.page.getByLabel('Username:').click();
  await this.page.getByLabel('Username:').fill('pepito1997');
  await this.page.getByLabel('Password:').click();
  await this.page.getByLabel('Password:').fill('123456');
  this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await this.page.getByRole('button', { name: 'Sign up' }).click();
      
    }  

  }
  
  module.exports = { SignUp };
  