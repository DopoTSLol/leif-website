import html from "./footer.component.html";
import css from "./footer.component.css";
import * as webez from "@gsilber/webez";
//main functionality imports

export class FooterComponent extends webez.EzComponent {
    constructor() {
        super(html, css);
    } //basic constructor
}
