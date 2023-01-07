export enum actionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
  AUTH_FAIL = 'AUTH_FAIL',
  USER_LOADING = 'USER_LOADING',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAIL = 'LOGOUT_FAIL',
}

export type userData = {
  accessToken: string;
  refreshToken: string;
  user: {
    name: string;
    email: string;
    id: string;
  };
};

type actionUserLoading = {
  type: actionTypes.USER_LOADING;
};
type actionLoginSuccess = {
  type: actionTypes.LOGIN_SUCCESS;
  payload: userData;
};
type actionRegisterSuccess = {
  type: actionTypes.REGISTER_SUCCESS;
  payload: userData;
};

type actionLoginFail = {
  type: actionTypes.LOGIN_FAIL;
  payload: any;
};

type actionRegisterFail = {
  type: actionTypes.REGISTER_FAIL;
  payload: any;
};

type actionAuthFail = {
  type: actionTypes.AUTH_FAIL;
  payload: any;
};

type actionLogout = {
  type: actionTypes.LOGOUT_SUCCESS;
  payload: userData;
};

export type Actions =
  | actionLoginSuccess
  | actionLoginFail
  | actionRegisterSuccess
  | actionRegisterFail
  | actionAuthFail
  | actionUserLoading
  | actionLogout;
