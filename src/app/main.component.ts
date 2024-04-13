import html from "./main.component.html";
import css from "./main.component.css";
import * as webez from "@gsilber/webez";
//main functionality imports

import { HeaderComponent } from "./page components/header/header.component";
import { BodyComponent } from "./page components/body/body.component";
import { AsideComponent } from "./page components/aside/aside.component";
import { FooterComponent } from "./page components/footer/footer.component";
//html file imports

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends webez.EzComponent {
    private header: HeaderComponent = new HeaderComponent();
    private body: BodyComponent = new BodyComponent();
    private aside: AsideComponent = new AsideComponent();
    private footer: FooterComponent = new FooterComponent();

    constructor() {
        super(html, css);
        this.addComponent(this.header, "header");
        this.addComponent(this.body, "body");
        this.addComponent(this.aside, "aside");
        this.addComponent(this.footer, "footer");
    } //constructor that adds all of the main elements of the page
}
