import { action, makeAutoObservable } from "mobx";
import { IAccount } from "../types";
import { ETransactionType, ITransaction } from "@entities/Transaction/models";

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

  public setBalance = action(
    ({ id, amount }: { id: string; amount: number }): void => {
      const account = this.accountList?.find((account) => account.id === id);

      if (account) {
        account.balance += amount;
      }
    }
  );

  public closeAccount = action((id: string): void => {
    const account = this.accountList?.find((account) => account.id === id);

    if (account) {
      account.status = "Closed";
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

  public addTransaction = action(
    ({ id, transaction }: { id: string; transaction: ITransaction }): void => {
      const account = this.accountList?.find((account) => account.id === id);

      if (account) {
        if (account.transactions) {
          account.transactions.push(transaction);
        } else {
          account.transactions = [transaction];
        }
        account.balance = Number(account.balance);
        transaction.amount = Number(transaction.amount);

        if (
          transaction.type === ETransactionType.Deposit ||
          transaction.type === ETransactionType.LoanAccrual
        ) {
          account.balance += transaction.amount;
        } else {
          account.balance -= transaction.amount;
        }
      }
    }
  );
}
