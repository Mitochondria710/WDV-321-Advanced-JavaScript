document.getElementById("myButton").addEventListener("click", () => {
    setCookie("myCookie", "my_cookie_value", 7);
    console.log(document.cookie);
})

document.getElementById("readCookie").addEventListener("click", () => {
    console.log(getCookie("myCookie"))
})

document.getElementById("deleteCookie").addEventListener("click", () => {
    deleteCookie("myCookie")
})

//set a cookie withj expiration in days
const setCookie = (name, value, days) => {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires};path=/`
}

//read a cookie by name
const getCookie = (name) => {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [key, val] = c.split("=");
        if (key === name) return val;
    }
    return null;
}

const deleteCookie = (name) => {
    document.cookie = name +"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}