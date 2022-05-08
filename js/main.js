let btn = document.querySelector('button');
let spanImagem = document.querySelectorAll('span.imagem');
let spanTexto = document.querySelectorAll('span.texto');
let first_name = document.querySelector('input[name=first_name]');
let last_name = document.querySelector('input[name=last_name]');
let email = document.querySelector('input[name=email]');
let password = document.querySelector('input[name=password]');

function validarEmail(email){
    
    let valida = /\S+@\S+\.\S+/;
    return valida.test(email);
}

btn.onclick = function (){
    event.preventDefault();

    if (first_name.value == ''){
        spanImagem[0].style.display = 'initial';
        spanTexto[0].style.display = 'initial';
        first_name.style.border = '1px solid red';
    } else {
        spanImagem[0].style.display = 'none';
        spanTexto[0].style.display = 'none';
        first_name.style.border = '1px solid rgba(10, 0, 0, 0.2)';
    }

    if (last_name.value == ''){
        spanImagem[1].style.display = 'initial';
        spanTexto[1].style.display = 'initial';
        last_name.style.border = '1px solid red';
    } else {
        spanImagem[1].style.display = 'none';
        spanTexto[1].style.display = 'none';
        last_name.style.border = '1px solid rgba(10, 0, 0, 0.2)';
    }

    if (validarEmail(email.value) == false || email.value == ''){
        spanImagem[2].style.display = 'initial';
        spanTexto[2].style.display = 'initial';
        email.style.border = '1px solid red';
    } else {
        spanImagem[2].style.display = 'none';
        spanTexto[2].style.display = 'none';
        email.style.border = '1px solid rgba(10, 0, 0, 0.2)';
    }

    if (password.value == ''){
        spanImagem[3].style.display = 'initial';
        spanTexto[3].style.display = 'initial';
        password.style.border = '1px solid red';
    } else {
        spanImagem[3].style.display = 'none';
        spanTexto[3].style.display = 'none';
        password.style.border = '1px solid rgba(10, 0, 0, 0.2)';
    }

    if (first_name.value != '' && last_name.value != '' && validarEmail(email.value) == true && password.value != ''){
        alert(`Parabéns, ${first_name.value}!! Seu login foi realizado com sucesso!`);
    }

};