import axios from "axios";
import useSWR from "swr";
import { apiHost, ApiRoutes } from "../apiRoutes";

interface User {
  email: string;
  role: string;
}

interface useUserProps {
  user: User;
  mutate: any;
}

export function useUser(): useUserProps {
  const { data, mutate } = useSWR(
    localStorage.getItem("userToken") && `${apiHost}${ApiRoutes.USER_ME}`,
    async () => {
      const response = await axios.get(`${apiHost}${ApiRoutes.USER_ME}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });
      return response.data;
    }
  );

  return {
    user: data,
    mutate,
  };
}
