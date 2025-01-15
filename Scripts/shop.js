
var productname="";
var nameuser=""
function onPressedBuyNow(name){
 localStorage.setItem("product",name);
 window.location.href = "delivery.html";
}
function payment(){
    const nameField = document.getElementById("nameinput");
    const numberField = document.getElementById("numberinput");
    const addressField = document.getElementById("addressinput");
    const termsCheckbox = document.getElementById("exampleCheck1");
    const qrImg = document.getElementById("qrArea");
    if (
        nameField.value.trim() !== "" &&
        numberField.value.trim() !== "" &&
        addressField.value.trim() !== "" &&
        termsCheckbox.checked
    ) {
        qrImg.style.visibility = "visible"; // Make QR image visible
    } else {
        qrImg.style.visibility = "hidden"; // Ensure QR is hidden if validation fails
        alert("Please fill in all fields and agree to the terms and conditions.");
    }

}

function redirectT(){
    localStorage.setItem("name",document.getElementById("nameinput").value)
    window.location.href = "order_placed.html";
}