import { useMutation } from "@tanstack/react-query";

import { ICreateUserOptions } from "@entities/User/models/types/index";
import { fetchCreateUser } from "@entities/User/api";
import { handleError } from "@shared/api";

export const useCreateUser = () =>
  useMutation({
    mutationFn: (data: ICreateUserOptions) => fetchCreateUser(data),
    onError: (error) => handleError(error),
  });
