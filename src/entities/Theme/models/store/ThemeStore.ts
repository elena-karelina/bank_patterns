import { action, makeAutoObservable } from "mobx";
import { TTheme } from "../types";

export class ThemeStore {
  public theme: TTheme = "Light";

  public colors = {
    background: this.theme === "Light" ? "white" : "black",
  };

  constructor() {
    makeAutoObservable(this);
  }

  public setTheme = action((theme: TTheme): void => {
    this.theme = theme;
    this.applyTheme();
  });

  private applyTheme(): void {
    const root = document.documentElement;
    root.style.setProperty(
      "--background-color",
      this.theme === "Light" ? "white" : "#141414"
    );
    root.style.setProperty(
      "--text-color",
      this.theme === "Light" ? "black" : "white"
    );
    root.style.setProperty(
      "--hover-color",
      this.theme === "Light" ? "#ededed" : "#332e2e"
    );
  }
}
