import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError } from "@shared/api";
import { fetchUserList } from "@entities/User/api/fetchUserList";
import { IUseUserListOptions } from "./useUserList.interfaces";
import { EUserRole, IUser } from "@entities/User/models/types/index";

export const useUserList = ({
  role,
}: IUseUserListOptions): UseQueryResult<IUser[]> =>
  useQuery({
    queryFn: () => fetchUserList({ role }),
    queryKey:
      role === EUserRole.Client
        ? [EQueryKeys.UserList]
        : [EQueryKeys.EmployeeList],
    throwOnError: (error) => handleError(error),
  });
