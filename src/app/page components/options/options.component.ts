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

    @webez.Change("theme-input")
    private onThemeChange(v: webez.ValueEvent) {
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
            ]; //transgender theme
        }

        this.themeColors = themeColors;
    }

    public getThemeColors(): string[] {
        return this.themeColors;
    }
}
