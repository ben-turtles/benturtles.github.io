const LOCATION_PASSWORD = "test!"

function checkPassword() {
    let inputPassword = document.getElementById("location-password").value;
    inputPassword = inputPassword.toLowerCase();
    if (!(inputPassword.trim().length === 0)) {
        // not whitespace
        if (inputPassword === LOCATION_PASSWORD) {
            alert("Success!");
        } else {
            alert("No :(");
        }
    }
    // alert("onclick(): " + inputPassword);
    // window.location = "dev.html";
}