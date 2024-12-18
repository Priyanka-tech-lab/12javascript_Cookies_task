 /*for single value*/
function btn1Click(){
    var CookieKeyVal = "Name=" +txt1.value;
    var dt1=new Date();
    dt1.setTime(dt1.getTime()+(1000*60*60*24*5))
    var expiretime="expires="+dt1.toUTCString();
    var Domain = "path=/";
    var Cookies1 = CookieKeyVal+";"+expiretime+";"+Domain;


    document.cookie=Cookies1;
    window.location.href="2index.html";
}


  /*for multiple values*/

 
  
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

  function btn2Click()
{
    setCookie("Email",txt1.value,20);
    setCookie("Mobile",txt2.value,10);
    window.location.href= "2index.html";
    
}



