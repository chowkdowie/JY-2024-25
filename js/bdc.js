document.addEventListener("DOMContentLoaded", function () {
    let password = "jenniferyi123"; 
    let enteredPassword = prompt("Enter the password to access this page:");

    if (enteredPassword !== password) {
        alert("Incorrect password. Redirecting...");
        window.location.href = "index.html"; 
    }
    else {
        document.getElementById("protected-content").style.display = "block";
    }
});
