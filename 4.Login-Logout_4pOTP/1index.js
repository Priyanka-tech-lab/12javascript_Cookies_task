function setCookie(Key, Value, Days)
{
    
    var CookieKeyVal = Key+"="+Value;
    var dt1 = new Date();
    dt1.setTime(dt1.getTime()+(1000*60*60*24*Days));
    var ExpireTime = "expires="+dt1.toUTCString();
    var Domain = "path=/";
    var Cookie = CookieKeyVal+";"+ExpireTime+";"+Domain;
    document.cookie = Cookie;
}

function btn1Click()
{
    setCookie("Name",txt1.value,5);
    setCookie("Email",txt2.value,5);
    setCookie("Password",txt3.value,5);
    var gender=0;
    if (rdo1.checked==true) {
        gender = "Male"
    }
    else if (rdo2.checked==true) {
        gender = "Female"
    }

    setCookie("gender",gender,5);

    setCookie ("DOB",drop1.value,5) + "/";
    setCookie ("DOB",drop2.value,5) + "/";
    setCookie ("DOB",drop3.value,5) + "/";

    window.location.href= "2index.html";
 
}