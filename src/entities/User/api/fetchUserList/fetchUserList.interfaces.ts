import { EUserRole } from "@entities/User/models/types/index";

export interface IUserList {
  role: EUserRole;
}
export interface IUserResult {
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
