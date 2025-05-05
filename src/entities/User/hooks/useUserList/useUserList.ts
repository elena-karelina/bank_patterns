import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { EQueryKeys, handleError, HttpError } from "@shared/api";
import { fetchUserList } from "@entities/User/api/fetchUserList";
import { IUseUserListOptions } from "./useUserList.interfaces";
import { EUserRole, IUser } from "@entities/User/models/types/index";
import { useCircuitBreaker } from "@shared/contexts";

export const useUserList = ({
  role,
}: IUseUserListOptions): UseQueryResult<IUser[]> => {
  const circuitBreaker = useCircuitBreaker();

  return useQuery({
    queryFn: () => fetchUserList({ role, circuitBreaker }),
    queryKey:
      role === EUserRole.Client
        ? [EQueryKeys.UserList]
        : [EQueryKeys.EmployeeList],
    throwOnError: (error) => handleError(error),
    retry: (_, error: Error) => {
      if (error instanceof HttpError && error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
