export const apiHost = "http://localhost:5000";

export enum ApiRoutes {
  USER_AUTH_LOGIN = "/api/auth", // POST
  USER_ME = "/api/auth", // GET (get logged in user)
}

/* ---- OTHER WAY TO WRITE IT -----
   export const ApiRoutes = {
    USER_REGISTER: "/register",
  } as const;  */

// DOCU : const as const (https://blog.logrocket.com/const-assertions-are-the-killer-new-typescript-feature-b73451f35802/)
