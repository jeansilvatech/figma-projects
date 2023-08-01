const btnRegister = document.querySelector('.btn-register')
const btnLogin = document.querySelector('.btn-login')
const screenLogin = document.querySelector('.login')
const screenRegister = document.querySelector('.register')
const screenTitle = document.querySelector('.title h2')
btnRegister.addEventListener('click',()=>{
    screenRegister.style.display = 'flex'
    screenRegister.classList.add('screen-enter-register')
    screenLogin.style.display = 'none'
    screenTitle.innerText = 'Faça seu cadastro na plataforma'
    btnRegister.style.display = 'none'
    btnLogin.style.display = 'block'
    document.title = 'Cadastro'
})
btnLogin.addEventListener('click',()=>{
    screenRegister.style.display = 'none'
    screenLogin.style.display = 'flex'
    screenLogin.classList.add('screen-enter-login')
    screenTitle.innerText = 'Faça seu login na plataforma'
    btnRegister.style.display = 'block'
    btnLogin.style.display = 'none'
    document.title = 'Login'
})
