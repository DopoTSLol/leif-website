import html from "./body.component.html";
import css from "./body.component.css";
import * as webez from "@gsilber/webez";
import { OptionsComponent } from "../options/options.component";
//main functionality imports

export class BodyComponent extends webez.EzComponent {
    @webez.BindStyle("body", "backgroundColor")
    private bodyBG: string = "rgb(0,0,0)";

    @webez.BindStyle("body", "color")
    private bodyText: string = "rgb(0,0,0)";

    constructor() {
        super(html, css);
    } //basic constructor

    updateStyle(options: OptionsComponent) {
        let newStyle: string[] = options.getThemeColors();

        this.bodyBG = newStyle[0];
        this.bodyText = newStyle[1];
    }
}
