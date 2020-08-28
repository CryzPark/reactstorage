import Cookies from 'js-cookie'

export const logIn = (TOKEN_KEY) => {
    Cookies.set('User',TOKEN_KEY,{ expires: 7 })
    window.location.reload();
}

export const logout = () => {
    Cookies.remove('User')
    window.location.reload();
}

export const isLogin = () => {
    if (Cookies.get('User')) {
        return true;
    }

    return false;
}