import html from "./options.component.html";
import css from "./options.component.css";
import * as webez from "@gsilber/webez";
//main functionality imports

export class AsideComponent extends webez.EzComponent {
    constructor() {
        super(html, css);
    } //basic constructor
}
