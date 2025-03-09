export enum EUserRole {
  Client,
  Employee,
}

export const roleId: Record<EUserRole, string> = {
  [EUserRole.Client]: "1781ec9b-0ef2-4ac9-90ec-b5d409600007",
  [EUserRole.Employee]: "76889a12-b034-4524-8517-22a621bf0945",
};
