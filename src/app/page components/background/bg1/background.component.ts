import html from "./background.component.html";
import css from "./background.component.css";
import * as webez from "@gsilber/webez";
import { OptionsComponent } from "../../options/options.component";
//main functionality imports

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class BGComponent1 extends webez.EzComponent {
    private options: OptionsComponent = new OptionsComponent();
    //importing the main parts of the page

    @webez.BindStyle("a", "backgroundColor")
    private backgroundA: string = "rgb(0, 255, 187)";
    @webez.BindStyle("d", "backgroundColor")
    private backgroundD: string = this.backgroundA;
    @webez.BindStyle("g", "backgroundColor")
    private backgroundG: string = this.backgroundA;
    @webez.BindStyle("j", "backgroundColor")
    private backgroundJ: string = this.backgroundA;

    @webez.BindStyle("b", "backgroundColor")
    private backgroundB: string = "rgb(217, 0, 255)";
    @webez.BindStyle("e", "backgroundColor")
    private backgroundE: string = this.backgroundB;
    @webez.BindStyle("h", "backgroundColor")
    private backgroundH: string = this.backgroundB;

    @webez.BindStyle("c", "backgroundColor")
    private backgroundC: string = "rgb(255, 204, 0)";
    @webez.BindStyle("f", "backgroundColor")
    private backgroundF: string = this.backgroundC;
    @webez.BindStyle("i", "backgroundColor")
    private backgroundI: string = this.backgroundC;
    //colors for moving background

    constructor() {
        super(html, css);
        this.addComponent(this.options, "options");
    } //constructor that adds all of the main elements of the page

    getOptions(options: OptionsComponent) {
        this.options = options;
    }

    /*
    updates the theme every 0.1 seconds
    */
    @webez.Timer(0)
    private updateStyle() {
        let themeColors = this.options.getThemeColors();

        for (let i = 0; i < 10; i++) {
            switch (i) {
                case 0:
                    this.backgroundA = themeColors[i % themeColors.length];
                    break;
                case 1:
                    this.backgroundB = themeColors[i % themeColors.length];
                    break;
                case 2:
                    this.backgroundC = themeColors[i % themeColors.length];
                    break;
                case 3:
                    this.backgroundD = themeColors[i % themeColors.length];
                    break;
                case 4:
                    this.backgroundE = themeColors[i % themeColors.length];
                    break;
                case 5:
                    this.backgroundF = themeColors[i % themeColors.length];
                    break;
                case 6:
                    this.backgroundG = themeColors[i % themeColors.length];
                    break;
                case 7:
                    this.backgroundH = themeColors[i % themeColors.length];
                    break;
                case 8:
                    this.backgroundI = themeColors[i % themeColors.length];
                    break;
                case 9:
                    this.backgroundJ = themeColors[i % themeColors.length];
                    break;
            } //unnessesarily long switch statement due to how webez works
        }
    }
}
