import { action, makeAutoObservable } from "mobx";
import { ICredit } from "../types";

export class RateStore {
  public rateList: ICredit[] | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public setRateList = action((rateList: ICredit[]): void => {
    this.rateList = rateList;
  });

  public addRate = action((rate: ICredit): void => {
    if (this.rateList) {
      this.rateList.push(rate);
    } else {
      this.rateList = [rate];
    }
  });
}
