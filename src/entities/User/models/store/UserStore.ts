import { action, makeAutoObservable } from "mobx";
import { IUser } from "../types/types";

export class UserStore {
  public userList: IUser[] | undefined;
  public employeeList: IUser[] | undefined;
  public clickedPerson: IUser | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public setUserList = action((userList: IUser[]): void => {
    console.log(userList);
    this.userList = userList;
  });

  public setEmployeeList = action((employeeList: IUser[]): void => {
    this.employeeList = employeeList;
  });

  public setClickedPerson = action((person: IUser): void => {
    this.clickedPerson = person;
  });

  public addUser = action((user: IUser): void => {
    if (this.userList) {
      this.userList.push(user);
    } else {
      this.userList = [user];
    }
  });

  public addEmployee = action((employee: IUser): void => {
    if (this.employeeList) {
      this.employeeList.push(employee);
    } else {
      this.employeeList = [employee];
    }
  });

  public banPerson = action((personId: string): void => {
    let personToBan = this.employeeList?.find(
      (person) => person.id === personId
    );

    if (personToBan) {
      personToBan.isBanned = true;
    }

    personToBan = this.userList?.find((person) => person.id === personId);

    if (personToBan) {
      personToBan.isBanned = true;
    }
  });

  public unbanPerson = action((personId: string): void => {
    let personToBan = this.employeeList?.find(
      (person) => person.id === personId
    );

    if (personToBan) {
      personToBan.isBanned = false;
    }

    personToBan = this.userList?.find((person) => person.id === personId);

    if (personToBan) {
      personToBan.isBanned = false;
    }
  });
}
