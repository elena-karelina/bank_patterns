import { action, makeAutoObservable } from "mobx";
import { ICreditRate } from "../types";

export class RateStore {
  public rateList: ICreditRate[] | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public setRateList = action((rateList: ICreditRate[]): void => {
    this.rateList = rateList;
  });

  public addRate = action((rate: ICreditRate): void => {
    if (this.rateList) {
      this.rateList.push(rate);
    } else {
      this.rateList = [rate];
    }
  });
}
