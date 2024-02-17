import baseurl from "./baseUrl"
import commonApi from "./commonApi"

/* ophiztask register  Api */
export const ophiztaskRegister = async (reqbody) => {
    return await commonApi('POST', `${baseurl}/ophiztask/register`, reqbody, "")

}

/* ophiztask login  Api */
export const ophiztaskLogin = async (reqbody) => {
    return await commonApi("POST", `${baseurl}/ophiztask/login`, reqbody, "")
}
