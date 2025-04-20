import { useMutation } from "@tanstack/react-query";

import { ILoginData } from "@entities/User/models/types/index";
import { fetchLogin } from "@entities/User/api";
import { handleError } from "@shared/api";

export const useLogin = () =>
  useMutation({
    mutationFn: (data: ILoginData) => fetchLogin(data),
    onError: (error) => handleError(error),
  });
