function functionLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        window.location.href = "/agendar/logged.html";
        } else {
            let errorMessage = document.createElement("p");
            errorMessage.textContent = "Login incorreto. Por favor, tente novamente.";
            errorMessage.style.color = "red";
            document.body.appendChild(errorMessage);
        }
}