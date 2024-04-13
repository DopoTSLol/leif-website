import html from "./body.component.html";
import css from "./body.component.css";
import * as webez from "@gsilber/webez";
//main functionality imports

export class BodyComponent extends webez.EzComponent {
    constructor() {
        super(html, css);
    } //basic constructor
}
