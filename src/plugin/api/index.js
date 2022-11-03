import * as Axios from "./setting/methods";

/**
 * 登入
 * @param { Object } params {
 *  @param { String } account
 *  @param { String } password
 * } 
 * @returns 
 */
export const Login = (params) => Axios.Post("/user/login", params);

// TODO 往下追加新 API
