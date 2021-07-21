import axios from "axios";
import { apiHost, ApiRoutes } from "../apiRoutes";

interface UserLogin {
  email: string;
  password: string;
}

export default async function fetchUserLogin({ email, password }: UserLogin) {
  const body = { email, password };

  return await axios
    .post(`${apiHost}${ApiRoutes.USER_AUTH_LOGIN}`, body)
    .then((res) => {
      const token = res.data.token;

      if (!token) {
        console.log("authentification failed");
      } else {
        localStorage.setItem("userToken", token);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
