function setCookie(name, value, minutes) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (minutes * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(name) {
    var cookieName = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

function isCookieExpired(name) {
    var cookieValue = getCookie(name);
    if (cookieValue === null) {
        return true;
    }
    var expires = new Date(document.cookie.replace(/(?:(?:^|.*;\s*) + name + \s*=\s*([^;]*).*$)|^.*$/, "$1"));
    return expires < new Date();
}

function removeCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

export { setCookie, getCookie, isCookieExpired, removeCookie };
