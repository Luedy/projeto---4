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


/*const iconLogin = document.querySelector("#fig-usuario");
const input2 = document.getElementById('form-email');

const iconPass = document.querySelector("#fig-senha");
const input = document.getElementById('form-senha');
input.addEventListener('click',()=>{
    iconPass.classList.add('animacao')
    input.classList.add('teste')

});

input2.addEventListener('click',()=>{
    console.log("cliquei")
    iconLogin.classList.add('animacao')
    input2.classList.add('teste')
});
*/