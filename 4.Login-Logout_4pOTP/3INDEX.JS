function getRandomeSixDigit()
{
 return Math.floor(Math.random()*(999999-100000+1)) + 100000;
}
let randomeSixDigit = getRandomeSixDigit();
console.log(randomeSixDigit);


lbl1.innerHTML = randomeSixDigit;

// query string

function btn1Click()
{

    var t1 = lbl1.innerHTML;
    
    if (lbl1.innerHTML == txt1.value) {

        window.location.href="4index.html?OTP="+t1;
        
    }
    else
    {
        txt1.value = "wrong OTP"
    }
}



