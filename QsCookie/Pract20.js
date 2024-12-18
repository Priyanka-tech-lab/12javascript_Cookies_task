window.onload = function () {
  var allCookie = document.cookie.trim();
  var allCookieArray = allCookie.split(";");
  for (let i = 0; i < allCookieArray.length; i++) {
    const singleCookie = allCookieArray[i].trim();
    var cookieKeyValArray = singleCookie.split("=");
    for (let j = 0; j < cookieKeyValArray.length; j++) {
      if (cookieKeyValArray[0] == "Name") {
        lbl1.innerHTML = cookieKeyValArray[1];
      }
    }
    // console.log(cookieKeyValArray);
  }
};

function getCookie(Key) {
  var allCookie = document.cookie.trim();
  var allCookieArray = allCookie.split(";");
  for (let i = 0; i < allCookieArray.length; i++) {
    const singleCookie = allCookieArray[i].trim();
    var cookieKeyValArray = singleCookie.split("=");
    for (let j = 0; j < cookieKeyValArray.length; j++) {
      if (cookieKeyValArray[0] == Key) {
        return cookieKeyValArray[1];
      } 
    }
    // console.log(cookieKeyValArray);
  }
  return null;
}
window.onload = function () {
    if (getCookie("Email") != null) {
        lbl2.innerHTML = getCookie("Email");
    }

    if (getCookie("Mobile") != null) {
        lbl3.innerHTML = getCookie("Mobile");
    }
};
