import { action, configure, makeAutoObservable } from "mobx";

import { INavigation } from "./RoutingStore.interfaces";
import { EAppStage } from "@shared/types";

configure({
  enforceActions: "never",
  isolateGlobalState: true,
  safeDescriptors: false,
});

export class RoutingStore {
  public appStage: EAppStage = EAppStage.LoginPage;

  public previousAppStage?: EAppStage;

  private navigation: INavigation;

  constructor(navigation: INavigation) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.navigation = navigation;
  }

  public setAppStage = action(
    (stage: EAppStage, previousAppStage?: EAppStage): void => {
      this.appStage = stage;
      this.previousAppStage = previousAppStage;
    }
  );

  public goBack = action((): void => {
    this.navigation.navigateBack();
  });

  public goAppBack = action((defaultPreviousStage: EAppStage): void => {
    this.appStage = this.previousAppStage || defaultPreviousStage;
    this.previousAppStage = undefined;
  });

  public navigateTo = action((path: string): void => {
    this.navigation.navigateTo(path);
  });
}
