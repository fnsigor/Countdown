// metodo para atualizar o countdown a cada segundo
var x = setInterval(function() {

    // definindo a data atual
    var now = new Date().getTime();

    // definindo até que data vai o countdown
    var countDownDate = new Date("Aug 3, 2022 12:00:00").getTime();

    //encontrando distancia entre a data atual e a data final do countdown
    var distance = countDownDate - now;

    // Cálculo para dias, horas, minutos e segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Mostrando na tela os valores dos dados
    document.getElementById("valorDias").innerHTML = days;
    document.getElementById("valorHoras").innerHTML = hours;
    document.getElementById("valorMinutos").innerHTML = minutes;
    document.getElementById("valorSegundos").innerHTML = seconds;

}, 1000);



const btInscrevase = document.getElementById('inscrevase')
const btEnviar =  document.getElementById('buttonForm')
const countdown = document.getElementById('div-content')
const formulario =  document.getElementById('formulario')

//mostrar formulario ao clicar em inscreva-se
btInscrevase.onclick = () =>{
    countdown.classList.toggle('hiding')
    formulario.classList.toggle('hiding')
}

//abrir o email do usuario ao clicar em enviar
btEnviar.onclick = () => {
    window.open('mailto:igorfernamdez@gmail.com');
}

//voltar para o countdown ao pressionar esc
document.querySelector('body').onkeydown = (key) => {
    if(key.key == "Escape" && countdown.getAttribute('class').includes('hiding')){
        countdown.classList.toggle('hiding')
        formulario.classList.toggle('hiding')
    }
}


