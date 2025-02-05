const { expect } = require("@playwright/test");
class Contact {
    constructor(page) {
      this.page = page;
      this.contactButton = page.locator("//a[contains(text(),'Contact')]");
      this.contacEmail = page.locator("#recipient-email");
      this.contacName = page.locator("#recipient-name");
      this.contacMessage = page.locator("#message-text");    
      this.sendButtonPopUp = page.locator("[onClick*=send]");
    }    
    async goTopage(){

      await this.page.goto("https://demoblaze.com");
  
    }
  
    async fillConctacForm(user,name,message) {   
      await this.contacEmail.fill(user);
      await this.contacName.fill(name);
      await this.contacMessage.fill(message);
      await this.sendButtonPopUp.click();
      await this.page.on("dialog", (dialog) => dialog.accept()); 
  
    }

    async visualValidations(){
      await this.contactButton.click();
      await expect(this.contactButton).toBeVisible();
      await expect(this.contacName).toBeVisible();
      await expect(this.contacEmail).toBeVisible();
      await expect(this.contacMessage).toBeVisible();
    }
  }
  
  module.exports = {Contact};
  