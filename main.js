const button = document.querySelector('button')
const form = document.querySelector('#form')
const inputUsername = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const allInput = document.querySelectorAll('input')
const paragraphUsername = document.createElement('p')
const paragraphEmail = document.createElement('p')
const paragraphPassword = document.createElement('p')
const inputPassword = document.querySelector('#password')
const olhoShowPassword = document.querySelector('.olhoShowPassword')
const olhoShowPasswordCheck = document.querySelector('.olhoShowPasswordCheck')
const inputPassawordCheck = document.querySelector('#passawordCheck')
const paragraphSubmit = document.createElement('p')

const regexName = /^[A-Za-z]{1,}$/
const regexEmail = /[a-z0-9]+@[a-z0-9]+\.[a-z]/
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/


inputUsername.addEventListener('input' , () => { /// about username 
    const inputNameValue = form.username.value
    const isValidResultName =  regexName.test(inputNameValue)   

    if(isValidResultName) {
         inputUsername.setAttribute('class','valid')
         paragraphUsername.textContent = 'Valid Username'
         paragraphUsername.setAttribute('class','validUser')
         inputUsername.insertAdjacentElement('afterend' , paragraphUsername)
    }else{
        inputUsername.setAttribute('class','invalid')
        paragraphUsername.textContent = 'Invalid Username'
        paragraphUsername.setAttribute('class','invalidUser')
        inputUsername.insertAdjacentElement('afterend' , paragraphUsername)
    }
    // paragraphSubmit.remove()
})
inputUsername.addEventListener('blur' ,() => {
    inputUsername.removeAttribute('class')
    paragraphUsername.remove()
})



inputEmail.addEventListener('input' , () => {
    const email = inputEmail.value
    const isValidEmail = regexEmail.test(email)

    if(isValidEmail){
        inputEmail.setAttribute('class','valid')
        paragraphEmail.textContent = 'Valid Email'
        paragraphEmail.setAttribute('class','validUser')
        inputEmail.insertAdjacentElement('afterend' , paragraphEmail)
   }else{
        inputEmail.setAttribute('class','invalid')
       paragraphEmail.textContent = 'Invalid Email'
       paragraphEmail.setAttribute('class','invalidUser')
       inputEmail.insertAdjacentElement('afterend' , paragraphEmail)
   }
//    paragraphSubmit.remove()
})
inputEmail.addEventListener('blur' ,() => {
    inputEmail.removeAttribute('class')
    paragraphEmail.remove()
})


inputPassword.addEventListener('input', () =>{

    const passwordInput = inputPassword.value
    const isValidPassword = regexPassword.test(passwordInput)

    if(isValidPassword){
        inputPassword.setAttribute('class','valid')
        paragraphPassword.textContent = 'Valid Password'
        paragraphPassword.setAttribute('class','validUser')
        inputPassword.insertAdjacentElement('afterend' , paragraphPassword)
   }else{
        inputPassword.setAttribute('class','invalid')
       paragraphPassword.textContent = 'Password must have: UpperCase, Symbol and Number '
       paragraphPassword.setAttribute('class','invalidUser')
       inputPassword.insertAdjacentElement('afterend' , paragraphPassword)
   }
//    paragraphSubmit.remove()

})
inputPassword.addEventListener('blur' ,() => {
    inputPassword.removeAttribute('class')
    paragraphPassword.remove()
})

///// mostrar a senha 
olhoShowPassword.addEventListener('mousedown' , event => {
    document.querySelector('#password').type = 'text'
})

//// ocultar senha 
olhoShowPassword.addEventListener('mouseleave' , event => {
    document.querySelector('#password').type = 'password'
})


inputPassawordCheck.addEventListener('input' , event => {
    if(inputPassawordCheck.value === inputPassword.value){
        inputPassawordCheck.setAttribute('class','valid')
        paragraphPassword.textContent = 'Password Match'
        paragraphPassword.setAttribute('class','validUser')
        inputPassawordCheck.insertAdjacentElement('afterend' , paragraphPassword)
    }
    else{
        inputPassawordCheck.setAttribute('class','invalid')
        paragraphPassword.textContent = 'Password not Match'
        paragraphPassword.setAttribute('class','invalidUser')
        inputPassawordCheck.insertAdjacentElement('afterend' , paragraphPassword)
    }
    // paragraphSubmit.remove()
})
inputPassawordCheck.addEventListener('blur' ,() => {
    inputPassawordCheck.removeAttribute('class')
    paragraphPassword.remove()
})
///// mostrar a senha 
olhoShowPasswordCheck.addEventListener('mousedown' , event => {
    document.querySelector('#passawordCheck').type = 'text'
})

//// ocultar senha 
olhoShowPasswordCheck.addEventListener('mouseleave' , event => {
    document.querySelector('#passawordCheck').type = 'password'
})

form.addEventListener('submit' , event => {
    event.preventDefault()
    console.log(regexEmail.test(inputEmail.value))
    if(regexName.test(inputUsername.value) && regexEmail.test(inputEmail.value) && inputPassword.value === inputPassawordCheck.value){
        paragraphSubmit.textContent = 'Sucesfully create account'
        paragraphSubmit.setAttribute('class' , 'validUser')
        button.insertAdjacentElement('afterend' , paragraphSubmit)
    }else {
        paragraphSubmit.textContent = 'Invalid Data. Please try again.'
        paragraphSubmit.setAttribute('class' , 'invalidUser')
        button.insertAdjacentElement('afterend' , paragraphSubmit)
    }
})

document.addEventListener('click' , event => {
    paragraphSubmit.remove()
})