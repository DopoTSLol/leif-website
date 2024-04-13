import html from "./aside.component.html";
import css from "./aside.component.css";
import * as webez from "@gsilber/webez";
//main functionality imports

export class AsideComponent extends webez.EzComponent {
    constructor() {
        super(html, css);
    } //basic constructor
}
