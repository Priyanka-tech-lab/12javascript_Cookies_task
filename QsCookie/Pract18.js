var QueryString = new URLSearchParams(window.location.search);
window.onload = function()
{
    if (QueryString.has("Name") == true) {
        lbl1.innerHTML = QueryString.get("Name");
    }

    if (QueryString.has("Email") == true && QueryString.has("Mobile") == true) {
        lbl2.innerHTML = QueryString.get("Email");
        lbl3.innerHTML = QueryString.get("Mobile");
    }
}