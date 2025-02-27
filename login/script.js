function functionLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        window.location.href = "../agendar/index.html";
        
    } else {
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerHTML = '<h3>Login incorreto.<br> Por favor, tente novamente.</h3>';
        errorMessage.style.textAlign = "center";
        errorMessage.style.marginTop = "1rem";
        errorMessage.style.color = "red";
    }

    // Limpa os campos de entrada após a tentativa de login
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

// Adiciona um listener para o evento de tecla Enter
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("password").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            functionLogin();
        }
    });
});