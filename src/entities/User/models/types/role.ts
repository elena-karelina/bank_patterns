export enum EUserRole {
  Client,
  Employee,
}

export const roleId: Record<EUserRole, string> = {
  [EUserRole.Client]: "6c9d10bd-244a-45ff-9773-876a0e8ce76c",
  [EUserRole.Employee]: "b29062ad-dcb4-4f7f-87a8-91780496054a",
};
