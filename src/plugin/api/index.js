import * as Axios from "./setting/methods";

/**
 * 登入
 * @param { Object } params {
 *  @param { String } email
 *  @param { String } password
 * } 
 * @returns 
 */
export const Login = (params) => Axios.Post("/user/login", params);

// TODO 往下追加新 API


/**
 * 註冊
 * @param { Object } params {
 *  @param { String } name
 *  @param { String } email
 *  @param { String } password
 * } 
 * @returns 
 */
 export const SignUp = (params) => Axios.Post("/user/register", params);