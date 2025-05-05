import { EUserRole } from "@entities/User/models/types/index";
import { CircuitBreakerControls } from "@shared/types";

export interface IUserList {
  role: EUserRole;
  circuitBreaker: CircuitBreakerControls;
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
