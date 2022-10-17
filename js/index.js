function logar(){
    var login = document.getElementById('form-email').value;
    var senha = document.getElementById('form-senha').value;
    var msgErro = document.querySelector('.error-msg');
    const dataBase = [{
        login: "admin",
        senha: "admin"
    }];

    if(login == "admin" && senha =="admin"){
        location.href = "home.html";
        localStorage.login = JSON.stringify(dataBase); 
    } else{
        msgErro.innerHTML = "Ops, usuário ou senha inválidos.<br> Tente novamente!";
    }
}