var k=getCookie("K");
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
    //    console.log(cookieKeyValArray);
  }
  return null;
}
window.onload = function () {


  if (getCookie("Name") != null) {
    lbl1.innerHTML = getCookie("Name");
  }

  if (getCookie("Email") != null) {
    lbl2.innerHTML = getCookie("Email");
  }

  if (getCookie("Password") != null) {
    lbl3.innerHTML = getCookie("Password");
  }
  if (getCookie("gender") != null) {
    lbl4.innerHTML = getCookie("gender");
  }
  if (getCookie("DOB") != null) {
    lbl5.innerHTML = getCookie("DOB");
  }
debugger;
  if (k == 0) {
    if (getCookie("LogEmail") != null) {
      txt1.value = getCookie("LogEmail");
    }

    if (getCookie("LogPass") != null) {
      txt2.value = getCookie("LogPass");
    }
  }
  else {
    console.log("No Data")
  }
 


};



/*---------------------------------------------------------*/

function setCookie(Key, Value, Days) {
  var CookieKeyVal = Key + "=" + Value;
  var dt1 = new Date();
  dt1.setTime(dt1.getTime() + (1000 * 60 * 60 * 24 * Days));
  var ExpireTime = "expires=" + dt1.toUTCString();
  var Domain = "path=/";
  var Cookie2 = CookieKeyVal + ";" + ExpireTime + ";" + Domain;
  document.cookie = Cookie2;


}

function btn2Click() {  
  debugger;
 var email= getCookie("Email");
 var LogPass=getCookie("Password");
  
  if (checkbox1.checked == true) {
    setCookie("LogEmail",email, 5);
    setCookie("LogPass",LogPass, 5);
    k = 0;
  }

  else {
    setCookie("LogEmail",email, 5);
    setCookie("LogPass",LogPass, 5);
    k = 1;
  }
  setCookie("K",k, 5);

  if (txt1.value == getCookie("Email") && txt2.value == getCookie("Password")) {
    window.location.href = "3index.html";
  }

  else if (txt1.value != getCookie("Email")) {
    txt1.value = ("Email is wrong");
  }
  else if (txt2.value != getCookie("Password")) {
    txt2.value = ("password is wrong");
  }
  else {
    txt1.value = ("Email is wrong");
    txt2.value = ("password is wrong");
  }

}