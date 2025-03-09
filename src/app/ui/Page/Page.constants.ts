import { FC } from "react";
import { EAppStage } from "../../../shared/types";
import { MainPage } from "../../../pages/MainPage/MainPage";
import { AccountDetailsPage } from "@pages/AccountDetailsPage";
import { LoginPage } from "@pages/LoginPage";
import { PersonPage } from "@pages/PersonPage";

export const routes: Record<EAppStage, FC> = {
  [EAppStage.MainPage]: MainPage,
  [EAppStage.AccountDetailsPage]: AccountDetailsPage,
  [EAppStage.LoginPage]: LoginPage,
  [EAppStage.PersonPage]: PersonPage,
};
