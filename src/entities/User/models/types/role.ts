export enum EUserRole {
  Client,
  Employee,
}

export const roleId: Record<EUserRole, string> = {
  [EUserRole.Client]: "5ba6a6e8-b5b4-41ae-9d94-3141a92f99d0",
  [EUserRole.Employee]: "e138162a-9297-46e8-abff-c728b70d96b2",
};
