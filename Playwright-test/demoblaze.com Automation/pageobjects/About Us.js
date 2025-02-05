const { expect } = require("@playwright/test");
class About {
    constructor(page) {
      this.page = page;
      this.aboutButton = page.locator("//a[contains(text(),'About us')]");
      this.videoComponent = page.locator("#example-video")
      this.playVideoButton = page.locator("[title*=Video]");
      this.closeAbout = page.locator("div[id='videoModal'] div[class='modal-footer'] button[type='button']");
    
     
    }    
    async goTopage(){

      await this.page.goto("https://demoblaze.com");
  
    }    

    async visualValidations(){
      await this.aboutButton.click();
      await expect(this.page.locator("#videoModalLabel")).toHaveText(
        /About us/)
      await this.closeAbout.click();
      await this.videoComponent.waitFor();      
      await this.playVideoButton.waitFor();
    //   await expect(this.playVideoButton ).toBeVisible();
    //   await this.playVideoButton.click();
    //   await expect(this.playVideoButton ).toBeHidden();
     
    }
  }
  
  module.exports = {About};
  