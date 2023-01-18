interface PageContent {
    [key: string]: string;
}

export class MenuPage {
    private content: PageContent;

    public constructor (content: PageContent) {
        this.content = content;
        this.renderContent();
    }

     private renderContent() {}
}