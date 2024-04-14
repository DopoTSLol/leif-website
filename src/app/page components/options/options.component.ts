import html from "./options.component.html";
import css from "./options.component.css";
import * as webez from "@gsilber/webez";
//main functionality imports

export class OptionsComponent extends webez.EzComponent {
    @webez.BindValue("theme-input")
    themeSelect: string = "cmyk";

    private themeColors: string[] = [
        "rgb(0, 255, 187)",
        "rgb(217, 0, 255)",
        "rgb(255, 204, 0)",
    ];

    constructor() {
        super(html, css);
    } //basic constructor

    /*
    Changes the theme based on the users selection
    */
    @webez.Change("theme-input")
    private onThemeChange(v: webez.ValueEvent) {
        this.changeBackgroundTheme(v);
    }

    /*
    Changes the background to fit the theme
    */
    private changeBackgroundTheme(v: webez.ValueEvent) {
        this.themeSelect = v.value;
        let themeColors: string[] = [
            "rgb(0, 255, 187)",
            "rgb(217, 0, 255)",
            "rgb(255, 204, 0)",
        ]; //definition of local variable

        if (this.themeSelect === "cmyk") {
            themeColors = [
                "rgb(0, 255, 187)",
                "rgb(217, 0, 255)",
                "rgb(255, 204, 0)",
            ]; //cmyk theme
        } else if (this.themeSelect === "rgb") {
            themeColors = [
                "rgb(255, 75, 30)",
                "rgb(90, 233, 80)",
                "rgb(47, 90, 233)",
            ]; //rgb theme
        } else if (this.themeSelect === "trans") {
            themeColors = [
                "rgb(0, 171, 255)",
                "rgb(255, 117, 255)",
                "rgb(235, 242, 240)",
                "rgb(255, 117, 255)",
            ]; //transgender theme
        } else if (this.themeSelect === "hs") {
            themeColors = [
                "#a10000",
                "#a15000",
                "#a1a100",
                "#416600",
                "#008141",
                "#008282",
                "#005682",
                "#2b0057",
                "#6a006a",
                "#77003c",
            ];
        } else if (this.themeSelect === "ss") {
            themeColors = [
                "#eeaf61",
                "#fb9062",
                "#ee5d6c",
                "#ce4993",
                "#6a0d83",
            ];
        } else if (this.themeSelect === "riv") {
            themeColors = [
                "#b5f2f7",
                "#76b1ee",
                "#4ba6e2",
                "#775ab4",
                "#b952cf",
            ];
        }

        this.themeColors = themeColors;
    }

    public getThemeColors(): string[] {
        return this.themeColors;
    }
}
