import html from "./header.component.html";
import css from "./header.component.css";
import * as webez from "@gsilber/webez";
//main functionality imports

export class HeaderComponent extends webez.EzComponent {
    constructor() {
        super(html, css);
    } //basic constructor
}
