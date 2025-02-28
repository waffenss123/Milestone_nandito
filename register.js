document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("userEmail", email); // Perbaikan typo di sini
    localStorage.setItem("userPassword", password);

    alert("Registrasi Berhasil");
    window.location.href = "login.html";
});