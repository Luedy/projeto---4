function logar(){
    var login = document.getElementById('form-email').value;
    var senha = document.getElementById('form-senha').value;
    var msgErro = document.querySelector('.error-msg');
   
    const dataBase = JSON.parse(localStorage.getItem('login')) ?? [];
    
    if(dataBase.length > 0){
        console.log('estou aqui')
        document.form.email.value = "admin"
        document.form.Senha.value = "admin"
    }


    if(login == "admin" && senha =="admin"){
        location.href = "home.html";
        
    } else{
        console.log(dataBase);
        msgErro.innerHTML = "Ops, usuário ou senha inválidos.<br> Tente novamente!";
    }
}
