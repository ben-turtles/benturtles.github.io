const LOCATION_PASSWORD = "WPI"
const PASSWORD_TIMEOUT = 1;
let triedPassword = false;

function checkPassword() {
    if (!triedPassword) {
        triedPassword = true;
        let inputPassword = document.getElementById("location-password").value;
        inputPassword = inputPassword.toLowerCase();
        if (!(inputPassword.trim().length === 0)) {
            // Not whitespace, check for correctness.
            if (inputPassword === LOCATION_PASSWORD) {
                // Matched password!
                window.location = "location-found-394232";
            } else {
                // Wrong password! Reset field and add little delay.
                document.getElementById("location-password").value = "";
                setTimeout(function() {
                    triedPassword = false;
                }, PASSWORD_TIMEOUT * 1000);
            }
        }
    }
}