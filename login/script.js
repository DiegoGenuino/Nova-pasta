function functionLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        window.location.href = "/agendar/logged.html";
    }
}