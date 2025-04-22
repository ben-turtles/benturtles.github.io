const LOCATION_PASSWORD = "WPI"
const PASSWORD_TIMEOUT = 1;

function checkPassword() {
    let inputPassword = document.getElementById("location-password").value;
    inputPassword = inputPassword.toLowerCase();
    if (!(inputPassword.trim().length === 0)) {
        // Not whitespace, check for correctness.
        alert("hi: " + inputPassword + ", " + (inputPassword === LOCATION_PASSWORD));
        if (inputPassword === LOCATION_PASSWORD) {
            // // Matched password!
            // alert("yeah");
            // window.location = "location-found-394232";
        } else {
            // // Wrong password! Reset field.
            // alert("no");
            // document.getElementById("location-password").value = "";
        }
    }
}