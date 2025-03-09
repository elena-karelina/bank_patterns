import { action, makeAutoObservable } from "mobx";
import { IAccount } from "../types";
import { ITransaction } from "@shared/types";

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

  public setTransactions = action(
    ({
      id,
      transactions,
    }: {
      id: string;
      transactions: ITransaction[];
    }): void => {
      const account = this.accountList?.find((account) => account.id === id);

      if (account) {
        account.transactions = transactions;
      }
    }
  );
}
