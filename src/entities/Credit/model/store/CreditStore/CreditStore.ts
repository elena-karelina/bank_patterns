import { action, makeAutoObservable } from "mobx";
import { ICredit } from "../../types";

export class CreditStore {
  public creditList: ICredit[] | undefined;
  public clickedCredit: ICredit | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public setCreditList = action((creditList: ICredit[]): void => {
    this.creditList = creditList;
  });

  public setClickedCredit = action((credit: ICredit): void => {
    this.clickedCredit = credit;
  });

  public addAccount = action((credit: ICredit): void => {
    if (this.creditList) {
      this.creditList.push(credit);
    } else {
      this.creditList = [credit];
    }
  });
}
