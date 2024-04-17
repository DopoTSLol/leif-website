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

    private themeBody: string[] = [
        "rgba(0, 255, 187, 0.75)",
        "#00ff40",
        "rgba(217, 0, 255, 0.75)",
        "#7300ff",
        "rgba(255, 204, 0, 0.75)",
        "#ff7b00",
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
        let themeColors: string[] = this.themeColors; //definition of local variable
        let themeBody: string[] = this.themeBody;

        if (this.themeSelect === "cmyk") {
            themeColors = [
                "rgb(0, 255, 187)",
                "rgb(217, 0, 255)",
                "rgb(255, 204, 0)",
            ]; //cmyk theme
            themeBody = [
                "rgba(0, 255, 187, 0.75)",
                "#00ff40",
                "rgba(217, 0, 255, 0.75)",
                "#7300ff",
                "rgba(255, 204, 0, 0.75)",
                "#ff7b00",
            ];
        } else if (this.themeSelect === "rgb") {
            themeColors = [
                "rgb(255, 75, 30)",
                "rgb(90, 233, 80)",
                "rgb(47, 90, 233)",
            ]; //rgb theme

            themeBody = [
                "rgba(255, 0, 0, 0.75)",
                "rgb(255, 75, 30)",
                "rgba(0, 255, 0, 0.75)",
                "#acffa6",
                "rgba(0, 0, 255, 0.75)",
                "#698bff",
            ];
        } else if (this.themeSelect === "trans") {
            themeColors = [
                "rgb(0, 171, 255)",
                "rgb(255, 117, 255)",
                "rgb(235, 242, 240)",
                "rgb(255, 117, 255)",
            ]; //transgender theme

            themeBody = [
                "rgba(36, 171, 209, 0.75)",
                "#0073ff",
                "rgba(180, 36, 209, 0.75)",
                "#ff00d4",
                "rgba(82, 87, 92, 0.75)",
                "#a8adac",
            ];
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

            themeBody = [
                "rgba(255, 255, 255, 0.75)",
                "rgb(150, 150, 150)",
                "rgba(150, 150, 150, 0.75)",
                "rgb(100, 100, 100)",
                "rgba(100, 100, 100, 0.75)",
                "rgb(50, 50, 50)",
            ];
        } else if (this.themeSelect === "ss") {
            themeColors = [
                "#eeaf61",
                "#fb9062",
                "#ee5d6c",
                "#ce4993",
                "#6a0d83",
            ];

            themeBody = [
                "rgba(255, 141, 0, 0.75)",
                "#ff3700",
                "rgba(194, 10, 29, 0.75)",
                "#73031f",
                "rgba(136, 11, 150, 0.75)",
                "#750156",
            ];
        } else if (this.themeSelect === "riv") {
            themeColors = [
                "#b5f2f7",
                "#76b1ee",
                "#4ba6e2",
                "#775ab4",
                "#b952cf",
            ];

            themeBody = [
                "rgba(0, 236, 255, 0.75)",
                "#e48aff",
                "rgba(228, 138, 255, 0.75)",
                "#7f42ff",
                "rgba(154, 138, 255, 0.75)",
                "rgb(0, 0, 255)",
            ];
        }

        this.themeColors = themeColors;
        this.themeBody = themeBody;
    }

    public getThemeColors(): string[] {
        return this.themeColors;
    }

    public getThemeBody(): string[] {
        return this.themeBody;
    }
}
