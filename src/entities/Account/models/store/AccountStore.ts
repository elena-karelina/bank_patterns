import { action, makeAutoObservable } from "mobx";
import { IAccount } from "../types";
import { ETransactionType, ITransaction } from "@entities/Transaction/models";

export class AccountStore {
  public accountList: IAccount[] | undefined;
  public hiddenAccountList: IAccount[] | undefined;
  public visibleAccountList: IAccount[] | undefined;
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

  public addVisibleAccount = action((account: IAccount): void => {
    if (this.visibleAccountList?.some((acc) => acc.id === account.id)) {
      return;
    }

    if (this.visibleAccountList) {
      this.visibleAccountList.push(account);
    } else {
      this.visibleAccountList = [account];
    }
  });

  public addHiddenAccount = action((account: IAccount): void => {
    if (this.hiddenAccountList?.some((acc) => acc.id === account.id)) {
      return;
    }

    if (this.hiddenAccountList) {
      this.hiddenAccountList.push(account);
    } else {
      this.hiddenAccountList = [account];
    }
  });

  public hideAccount = action((id: string): void => {
    if (this.visibleAccountList) {
      const accountIndex = this.visibleAccountList.findIndex(
        (account) => account.id === id
      );
      if (accountIndex !== -1) {
        const [account] = this.visibleAccountList.splice(accountIndex, 1);
        this.hiddenAccountList = this.hiddenAccountList || [];
        this.hiddenAccountList.push(account);
      }
    }
    console.log(this.hiddenAccountList);
  });

  public showAccount = action((id: string): void => {
    if (this.hiddenAccountList) {
      const accountIndex = this.hiddenAccountList.findIndex(
        (account) => account.id === id
      );
      if (accountIndex !== -1) {
        const [account] = this.hiddenAccountList.splice(accountIndex, 1);
        this.visibleAccountList = this.visibleAccountList || [];
        this.visibleAccountList.push(account);
      }
    }
  });

  public isAccountHidden = action((id: string): boolean => {
    return (
      this.hiddenAccountList?.some((account) => account.id === id) ?? false
    );
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
    let account = this.visibleAccountList?.find((account) => account.id === id);

    if (!account) {
      account = this.hiddenAccountList?.find((account) => account.id === id);
    }

    if (account) {
      account.status = "Closed";
    } else {
      console.error(`Аккаунт с id ${id} не найден.`);
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
