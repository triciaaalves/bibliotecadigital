const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmar = document.getElementById('confirmar');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checarInputs();
});

function checarInputs(){
    const nomeValue = nome.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const confirmarValue = confirmar.value;

    if(nomeValue === ""){
        setErroFor(nome, "O nome é obrigatório.");
    } else {
        setSucessoFor(nome);
    }

    if(emailValue === ""){
        setErroFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)){
        setErroFor(email, "Insira um e-mail válido.")
    } else {
        setSucessoFor(email);
    }

    if(senhaValue === ''){
        setErroFor(senha, 'A senha é obrigatória');
    } else if(senhaValue.length < 7) {
        setErroFor(senha, 'A senha precisa ter no mínimo 7 caracteres.');
    } else {
        setSucessoFor(senha);
    }

    if(confirmarValue === ''){
        setErroFor(confirmar, "A confirmação da senha é obrigatória.");
    } else if (confirmarValue !== senhaValue){
        setErroFor(confirmar, "As senhas precisam ser iguais.");
    } else {
        setSucessoFor(confirmar);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control sucesso";
    });

    if (formIsValid) {
        window.location.href = "index.html";
    }

}    
    
function setErroFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = 'form-control erro';
}

function setSucessoFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control sucesso";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});