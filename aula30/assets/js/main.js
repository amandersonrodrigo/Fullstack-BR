const data = new Date();
const diaSemana = data.getDay(); 
// const diaDoMes = data.getDate();
const mes = data.getMonth();
// const ano = data.getFullYear();
// const hora = data.toLocaleTimeString();
let dataTexto;
let mesTexto;

switch (diaSemana) {
    case 0:
        dataTexto = "Domingo";
    break;
    case 1: 
        dataTexto = "Segunda-Feira";
    break;
    case 2:
        dataTexto = "Terça-Feira";
    break;
    case 3:
        dataTexto = "Quarta-Feira";
    break;
    case 4:
        dataTexto = "Quinta-Feira";
    break;
    case 5:
        dataTexto = "Sexta-Feira";
    break;
    case 6:
        dataTexto = "Sábado";
    break;
}

switch (mes) {
    case 0:
        mesTexto = "Janeiro";
    break;
    case 1:
        mesTexto = "Fevereiro";
    break;
    case 2:
        mesTexto = "Março";
    break;
    case 3:
        mesTexto = "Abril";
    break;
    case 4: 
        mesTexto = "Maio";
    break;
    case 5:
        mesTexto = "Junho";
    break;
    case 6:
        mesTexto = "Julho";
    break;
    case 7:
        mesTexto = "Agosto";
    break;
    case 8:
        mesTexto = "Setembro";
    break;
    case 9:
        mesTexto = "Outubro";
    break;
    case 10:
        mesTexto = "Novembro";
    break;
    case 11:
        mesTexto = "Dezembro";
    break;
}

document.querySelector("h1").innerHTML = `${dataTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.toLocaleTimeString()}`;