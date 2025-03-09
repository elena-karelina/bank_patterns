import { action, makeAutoObservable } from "mobx";
import { ICredit, ICreditRate } from "../../types";

export class CreditStore {
  public creditList: ICredit[] | undefined;
  // public creditListFull: ICreditFull[] | undefined;
  public rateList: ICreditRate[] | undefined;
  public clickedCredit: ICredit | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public setCreditRateList = action((rateList: ICreditRate[]): void => {
    this.rateList = rateList;
  });

  // public addCreditFull = action((creditFull: ICreditFull[]): void => {
  //   this.rateList = rateList;
  // });

  public setCreditList = action((creditList: ICredit[]): void => {
    this.creditList = creditList;
  });

  public setClickedCredit = action((credit: ICredit): void => {
    this.clickedCredit = credit;
  });

  public addCredit = action((credit: ICredit): void => {
    if (this.creditList) {
      this.creditList.push(credit);
    } else {
      this.creditList = [credit];
    }
  });
}
