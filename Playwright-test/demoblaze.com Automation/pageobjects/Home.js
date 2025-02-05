class Home {
    constructor(page) {
      this.page = page;
      this.filterMonitor = page.locator("[onclick*=monitor]");
      this.tableProducts = page.locator("#tbodyid");
    }
    async goTopage(){
  
      await this.page.goto("https://demoblaze.com");
  
    }
  
    async validFilter(productFilter) {
      await this.filterMonitor.click();
      const count = await this.tableProducts.locator(".hrefch").count();

    for (let i = 0; i < count; i++) {
      const tabelLabel = await this.tableProducts
        .locator(".hrefch")
        .nth(i)
        .textContent();

      if (tabelLabel === productFilter) {
        const bool = true;
        expect(bool).toBeTruthy();        
        break;
      }
    }
    
  
    }
  }
  
  module.exports = { Home };