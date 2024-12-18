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

      // 1.name
      
      if (getCookie("contraction") != null) {
          lbl1.innerHTML += getCookie("contraction") + "&nbsp;";
      }
      if (getCookie("name") != null) {
          lbl1.innerHTML += getCookie("name") + "&nbsp;";
      }
      if (getCookie("fname") != null) {
          lbl1.innerHTML += getCookie("fname") + "&nbsp;";
      }
      if (getCookie("sname") != null) {
          lbl1.innerHTML += getCookie("sname");
      }

      // 2.gender
      if (getCookie("gender") != null) {
        lbl2.innerHTML = getCookie("gender");
      }

      // 3.cast dropdown1
      if (getCookie("cast") != null) {
        lbl3.innerHTML = getCookie("cast");
      }

       // 4.email
       if (getCookie("email") != null) {
        lbl4.innerHTML = getCookie("email");
      }
       // 5.birth
       if (getCookie("day") != null) {
        lbl5.innerHTML += getCookie("day") + "/";  
      }

      if (getCookie("month") != null) {
        lbl5.innerHTML += getCookie("month") + "/";  
      }

      if (getCookie("year") != null) {
        lbl5.innerHTML += getCookie("year");  
      }

      // 6.mobile number
      if (getCookie("mobile") != null) {
        lbl6.innerHTML = getCookie("mobile");
      }

       // 7.address
       if (getCookie("address") != null) {
        lbl7.innerHTML = getCookie("address");
      }

       // 8.landline
       if (getCookie("landline") != null) {
        lbl8.innerHTML = getCookie("landline");
      }

       // 9.income
       if (getCookie("income") != null) {
        lbl9.innerHTML = getCookie("income");
      }

       // 10.state
       if (getCookie("state") != null) {
        lbl10.innerHTML = getCookie("income");
      }

       // 11.city
       if (getCookie("city") != null) {
        lbl11.innerHTML = getCookie("city");
      }

       // 12.pincode
       if (getCookie("pincode") != null) {
        lbl12.innerHTML = getCookie("pincode");
      }

       // 13.payment
       if (getCookie("payment") != null) {
        lbl13.innerHTML = getCookie("payment");
      }

       // 14.emp status
       if (getCookie("status") != null) {
        lbl14.innerHTML = getCookie("status");
      }

       // 15.exp
       if (getCookie("exp") != null) {
        lbl15.innerHTML = getCookie("exp");
      }

      
       
        

  
     
  };
  