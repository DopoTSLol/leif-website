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

    @webez.BindStyle("body-title", "backgroundColor")
    private titleBG: string = "rgb(0,0,0)";

    @webez.BindStyle("body-title", "color")
    private titleText: string = "rgb(0,0,0)";

    @webez.BindStyle("body-box", "backgroundColor")
    private boxBG: string = "rgb(0,0,0)";

    @webez.BindStyle("body-box", "color")
    private boxText: string = "rgb(0,0,0)";
    //main body variables (formatting)

    @webez.BindStyle("body-title2", "backgroundColor")
    private titleB2: string = this.titleBG;
    @webez.BindStyle("body-title2", "color")
    private titleText2: string = this.titleText;
    //duplicate values for multiple elements

    @webez.BindStyle("body", "borderColor")
    private bodyBorderColor = this.bodyBG;
    @webez.BindStyle("body-title", "borderColor")
    private titleBorderColor = this.titleBG;
    @webez.BindStyle("body-box", "borderColor")
    private boxBorderColor = this.boxBG;
    @webez.BindStyle("body-title2", "borderColor")
    private titleBorderColor2 = this.titleBG;
    //border color

    constructor() {
        super(html, css);
    } //basic constructor

    updateStyle(options: OptionsComponent) {
        let newStyle: string[] = options.getThemeBody();

        this.bodyBG = newStyle[0];
        this.bodyText = newStyle[1];
        //body
        this.titleBG = newStyle[2];
        this.titleText = newStyle[3];
        this.titleB2 = this.titleBG;
        this.titleText2 = this.titleText;
        //title(s)
        this.boxBG = newStyle[4];
        this.boxText = newStyle[5];
        //box(es)

        this.bodyBorderColor = this.bodyBG;
        this.titleBorderColor = this.titleBG;
        this.boxBorderColor = this.boxBG;
        this.titleBorderColor2 = this.titleBorderColor;
        //border
    }
}
