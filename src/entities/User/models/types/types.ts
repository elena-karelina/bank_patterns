import { EUserRole } from "./role";

export interface ILoginData {
  phone: string;
  password: string;
}

export interface IUser {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  roles: [
    {
      id: string;
      name: EUserRole;
    }
  ];
  isBanned: boolean;
}

export interface ICreateUserOptions {
  fullName: string;
  password: string;
  phoneNumber: string;
  email: string;
  roles: string[];
}
