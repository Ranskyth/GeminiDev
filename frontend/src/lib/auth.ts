import { getCookie } from "cookies-next"
import { jwtDecode } from "jwt-decode"

export const getUserTokenDecode = () => {
    const auth_geminidev = getCookie("auth_geminidev")
    const decode = jwtDecode(String(auth_geminidev))
    return decode
}

export const getUserCookie = () => {
    const name = getCookie("name_user")
    return { name }
}

export const getUserToken = () => {

}