
var productname;

function onPressedBuyNow(name){
 productname=name;
 window.location.href = "delivery .html"
}
function payment(){
    const nameField = document.querySelector('input[placeholder="Enter your name."]');
    const numberField = document.querySelector('input[placeholder="Enter your number."]');
    const addressField = document.querySelector('input[placeholder="Enter your address."]');
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
    window.location.href = "thank_you.html";

}