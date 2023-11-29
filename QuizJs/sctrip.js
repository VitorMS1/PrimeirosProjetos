let questao01 = document.querySelector("#questao01");
let questao02 = document.querySelector("#questao02");
let questao03 = document.querySelector("#questao03");
let questao04 = document.querySelector("#questao04");
let questao05 = document.querySelector("#questao05");
let resultado = document.querySelector("#resultado");

let boasVindas = document.querySelector("#boasVindas");
let progress = document.querySelector(".progress-bar");
let progressDiv = document.querySelector(".progressDiv");

let mostrarResultado = document.querySelector("#mostrarResultado");
let infoResultado = document.querySelector("#infoResultado");

var pontuacao = 0;
const respostas = [];
const aviso = [];


//=========================>> Capturar Input <<==========================

function capturarRespota(event, numero)
{
    if(event.target.type == "radio")
    {
        respostas[numero] = parseInt(event.target.value);
        console.log(respostas[numero]);   
    }
}

//--------

questao01.addEventListener("click", function(event){capturarRespota(event, 1)})
questao02.addEventListener("click", function(event){capturarRespota(event, 2)})
questao03.addEventListener("click", function(event){capturarRespota(event, 3)})
questao04.addEventListener("click", function(event){capturarRespota(event, 4)})
questao05.addEventListener("click", function(event){capturarRespota(event, 5)})


//====================>> Somar e Função botões <<=======================

function enviar(numero, passada, proximo, progresso) 
{
    if (!isNaN(respostas[numero]))
    {
        passada.style.display = "none";
        proximo.style.display = "block";
        progress.style.width = progresso + "%";
        
        pontuacao = pontuacao + respostas[numero];
        console.log(pontuacao)
    }
    else
    {
        aviso[numero] = document.querySelector("#aviso" + numero);
        aviso[numero].style.display = "block";
    }
}

//==============================>> Botões <<==============================

function iniciar()
{
    boasVindas.style.display = "none";
    questao01.style.display = "block";
    progressDiv.style.display = "block";
}

//--------

function enviar01() 
{
    enviar(1, questao01, questao02, 20);
}
    
//--------

function enviar02() 
{
    enviar(2, questao02, questao03, 40);
}

//--------

function enviar03() 
{
    enviar(3, questao03, questao04, 60);
}

//--------

function enviar04() 
{
    enviar(4, questao04, questao05, 80);
}

//--------

function enviar05() 
{
    enviar(5, questao05, resultado, 100);

    mostrarResultado.innerHTML = pontuacao;

    if (pontuacao < 60)
    {
        infoResultado.innerHTML = "<br> Você se saiu bem, mas precisa melhorar!";
    }
    if (pontuacao >= 60)
    {
        infoResultado.innerHTML = "<br> PARABENS! Você obteve um ótimo resultado.";
    }
}
