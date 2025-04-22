const LOCATION_PASSWORD = "wpi"
const PASSWORD_TIMEOUT = 1;

function checkPassword() {
    let inputPassword = document.getElementById("location-password").value;
    if (!(inputPassword.trim().length === 0)) {
        // Not whitespace, check for correctness.
        if (inputPassword.toLowerCase() === LOCATION_PASSWORD.toLowerCase()) {
            // // Matched password!
            // alert("yeah");
            window.location = "location-found";
        } else {
            // // Wrong password! Reset field.
            // alert("no");
            document.getElementById("location-password").value = "";
        }
        // alert("check: " + inputPassword.valueOf() + ", " + (inputPassword.valueOf() === LOCATION_PASSWORD) + "..." + inputPassword.length + ", "
    // + inputPassword.);
    }
}