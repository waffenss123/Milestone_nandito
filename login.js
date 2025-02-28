document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedEmail = localStorage.getItem("userEmail"); // Gunakan kunci yang benar
    let storedPassword = localStorage.getItem("userPassword"); // Gunakan kunci yang benar

    if (email === storedEmail && password === storedPassword) {
        alert("Login Berhasil! Silahkan Berbelanja");
        window.location.href = "index.html";
    } else {
        alert("Invalid Username & Password");
    }
});