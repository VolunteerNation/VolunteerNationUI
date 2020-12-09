import {read_cookie} from "sfcookies";

const API_LOCALHOST = false;

const API_REMOTE_HOST = 'https://volunteernation-api.herokuapp.com';

export const API_HOST = function () {

  if (API_LOCALHOST) {

    return 'http://localhost:4000';
  } else {

    return API_REMOTE_HOST;
  }

}()
export const VNT_TOKEN_COOKIE = 'vntToken';
export const AUTH_HEADERS = {"auth-token": read_cookie(VNT_TOKEN_COOKIE)};
