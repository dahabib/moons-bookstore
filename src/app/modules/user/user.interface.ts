export type IUserLogin = {
  email: string;
  password: string;
};

export type IUserLoginResonse = {
  accessToken: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};
