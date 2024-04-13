import html from "./main.component.html";
import css from "./main.component.css";
import * as webez from "@gsilber/webez";
//main functionality imports

import { HeaderComponent } from "./page components/header/header.component";
import { BodyComponent } from "./page components/body/body.component";
import { AsideComponent } from "./page components/aside/aside.component";
import { FooterComponent } from "./page components/footer/footer.component";
import { OptionsComponent } from "./page components/options/options.component";
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
    private options: OptionsComponent = new OptionsComponent();
    //importing the main parts of the page

    @webez.BindStyle("a", "backgroundColor")
    backgroundA: string = "rgb(0, 255, 187)";
    @webez.BindStyle("d", "backgroundColor")
    backgroundD: string = this.backgroundA;
    @webez.BindStyle("g", "backgroundColor")
    backgroundG: string = this.backgroundA;
    @webez.BindStyle("j", "backgroundColor")
    backgroundJ: string = this.backgroundA;

    @webez.BindStyle("b", "backgroundColor")
    backgroundB: string = "rgb(217, 0, 255)";
    @webez.BindStyle("e", "backgroundColor")
    backgroundE: string = this.backgroundB;
    @webez.BindStyle("h", "backgroundColor")
    backgroundH: string = this.backgroundB;

    @webez.BindStyle("c", "backgroundColor")
    backgroundC: string = "rgb(255, 204, 0)";
    @webez.BindStyle("f", "backgroundColor")
    backgroundF: string = this.backgroundC;
    @webez.BindStyle("i", "backgroundColor")
    backgroundI: string = this.backgroundC;
    //colors for moving background

    constructor() {
        super(html, css);
        this.addComponent(this.header, "header");
        this.addComponent(this.body, "body");
        this.addComponent(this.aside, "aside");
        this.addComponent(this.footer, "footer");
        this.addComponent(this.options, "options");
    } //constructor that adds all of the main elements of the page

    @webez.Timer(0.1)
    updateStyle() {
        this.backgroundA = this.options.getThemeColors()[0];
        this.backgroundB = this.options.getThemeColors()[1];
        this.backgroundC = this.options.getThemeColors()[2];
        //sets the background color variables to the theme colors
        this.backgroundD = this.backgroundA;
        this.backgroundG = this.backgroundA;
        this.backgroundJ = this.backgroundA;
        this.backgroundE = this.backgroundB;
        this.backgroundH = this.backgroundB;
        this.backgroundF = this.backgroundC;
        this.backgroundI = this.backgroundC;
    }
}
