import { action, makeAutoObservable } from "mobx";
import { IAccount } from "../types";

export class AccountStore {
  public accountList: IAccount[] | undefined;
  public clickedAccount: IAccount | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public setAccountList = action((accountList: IAccount[]): void => {
    this.accountList = accountList;
  });

  public setClickedAccount = action((account: IAccount): void => {
    this.clickedAccount = account;
  });

  public addAccount = action((account: IAccount): void => {
    if (this.accountList) {
      this.accountList.push(account);
    } else {
      this.accountList = [account];
    }
  });
}
