const uri = "http://localhost:3000/";
const user = JSON.parse(window.localStorage.getItem('userTurmaAtividade'));

if (user) {
    window.location.href = "./home.html";
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
                localStorage.setItem("logado", JSON.stringify(res));
                window.location.href = "./home.html";
            }
        })
});