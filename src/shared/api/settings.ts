import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const settings = {
  // URL IdentityServer
  authority: "http://51.250.46.120:5003",
  client_id: "client_app",
  // URL на который IdentityServer перенаправляет после логина
  redirect_uri: "http://localhost:5173/signin-callback",
  // URL куда пользователя перенаправляет после выхода
  post_logout_redirect_uri: "http://localhost:5173/",

  response_type: "code",
  scope: "openid profile api1",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

export const userManager = new UserManager(settings);
