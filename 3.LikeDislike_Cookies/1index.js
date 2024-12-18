// set Cookies
function setCookie(Key, Value, Days)
{
    var CookieKeyVal = Key+"="+Value;
    var dt1 = new Date();
    dt1.setTime(dt1.getTime()+(1000*60*60*24*Days));
    var ExpireTime = "expires="+dt1.toUTCString();
    var Domain = "path=/";
    var Cookie1 = CookieKeyVal+";"+ExpireTime+";"+Domain;
    document.cookie = Cookie1;
}
var count=0
function btn1Click()
{
    count++;
    lbl1.innerHTML = count;
    setCookie("l1", count,20);

    /*window.location.href= "l1"; -->*/ /* ahi location nakhvama nai aave bcz location
                                     ek PAGE THI BIJE JAVA MATE USE THAYCHHE JE AHI 
                                     AAPDE NATHI JAVANU LABEL MA DIRECT THASE */
}

/*For Dislike*/
function btn2Click() {
    if (count>0) {
        count--;
    }
    lbl1.innerHTML = count;
    setCookie("l1", count,20);

    // lbl1.innerHTML += lbl1.innerHTML +1; --->console valu logic jova mate chhe aa comment
}

//getCookie

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
    if (getCookie("l1") != null) {
        l1 = getCookie("l1");
    }
};