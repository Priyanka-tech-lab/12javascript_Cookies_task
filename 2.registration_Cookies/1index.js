function setCookie(Key,Value,Days)
 {

    var CookieKeyVal = Key+"="+Value;
    var dt1 = new Date();
    dt1.setTime(dt1.getTime()+(1000*60*60*24*Days));
    var ExpireTime = "expires="+dt1.toUTCString();
    var Domain = "path=/";
    var Cookie1 = CookieKeyVal+";"+ExpireTime+";"+Domain;
    document.cookie = Cookie1;
}
    
function btn1Click()
{
    // 1.name
    setCookie("contraction",txt1.value,20);
    setCookie("name",txt2.value,20);
    setCookie("fname",txt3.value,20);
    setCookie("sname",txt4.value,20);

    // 2.gender

    var gender=0;
    if (rdo1.checked ==true) {
        gender= "Male";
    }
    else if (rdo2.checked==true) {
        gender="Female";   
    }
    setCookie("gender",gender,20)

    // 3.cast dropdown
    setCookie("cast",drop1.value,20);

    // 4.email
    setCookie("email",txt5.value,20);

    // 5.birth
    setCookie("day",drop2.value,20);
    setCookie("month",drop3.value,20);
    setCookie("year",drop4.value,20);

    // 6.mobile number
    setCookie("mobile",txt6.value,20);

    // 7.address
    setCookie("address",txt7.value,20);

    // 8.landline
    setCookie("landline",txt8.value,20);

    // 9.income
    setCookie("income",txt9.value,20);

    // 10.state
    setCookie("state",drop5.value,20);

    // 11. city
    setCookie("city",drop6.value,20);

    // 12.pincode
    setCookie("pincode",txt10.value,20);

    // 13.payment
    setCookie("payment",drop7.value,20);

    // 14.emp status
    var status=0;
    if (rdo3.checked ==true) {
        status= "NO";
    }
    else if (rdo4.checked==true) {
        status="YES";   
    }
    setCookie("status",status,20);

    // 15.exp
    setCookie("exp",txt11.value,20);






    window.location.href= "2index.html"; 
}