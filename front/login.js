const uri = "http://localhost:3000/";
const user = JSON.parse(window.localStorage.getItem('userTurmaAtividade'));

if (user) {
    window.location.href = "./home.html";  // Redirect to home if already logged in
}

const login = document.querySelector("#login");

login.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dados = {
        email: e.target.email.value,
        senha: e.target.senha.value,
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    };

    fetch(uri + "professor", options)
        .then((res) => res.json())
        .then((res) => {
            if (res.erro) {
                alert(res.erro);
            } else {
                const userData = {
                    id: res.id, 
                    nome: res.nome, 
                    email: res.email, 
                    logado: true
                };
                console.log('Login successful, response:', res);
                localStorage.setItem("userTurmaAtividade", JSON.stringify(userData));
                window.location.href = "./home.html";
            }
        })
});