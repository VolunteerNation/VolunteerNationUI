import {read_cookie} from "sfcookies";

const API_LOCALHOST = false;

export const API_host = function () {

  if (API_LOCALHOST) {

    return 'http://localhost:4000';
  } else {

    return 'https://volunteernation-api.herokuapp.com';
  }

}()
export const vntTokenCookie = 'vntToken';
export const authHeaders = {"auth-token": read_cookie(vntTokenCookie)};
