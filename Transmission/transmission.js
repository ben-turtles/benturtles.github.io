const LOCATION_PASSWORD = "test!"
const PASSWORD_TIMEOUT = 3;
let triedPassword = false;

function checkPassword() {
    if (!triedPassword) {
        triedPassword = true;
        let inputPassword = document.getElementById("location-password").value;
        inputPassword = inputPassword.toLowerCase();
        if (!(inputPassword.trim().length === 0)) {
            // not whitespace
            if (inputPassword === LOCATION_PASSWORD) {
                window.location = "location-found-394232";
            } else {
                document.getElementById("location-password").value = "";
                setTimeout(function() {
                    triedPassword = false;
                }, PASSWORD_TIMEOUT * 1000);
            }
        }
    }
}