import { Page, PageScreenshotOptions } from "@playwright/test";
import { LoginPage } from "./LoginPage";
export class Pages {
    public readonly loginPage = new LoginPage(this.page);

    constructor(private page: Page) {}

    public actions = {
        gotoUrl: async (url: string) => {
            await this.page.goto(url);
        },       

        reloadPage: async () => {
            await this.page.reload();
        },
    }

}