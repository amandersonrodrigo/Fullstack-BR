// Capturar evento de submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const pesoTxt =  document.querySelector("#peso");
    const alturaTxt = document.querySelector("#altura");

    const peso = Number(pesoTxt.value);
    const altura = Number(alturaTxt.value);

    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(mensagem, true);

    });

    function getNivelImc(imc) {
        const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    function getImc(peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
    }


    function criaParagrafo() {
        const p = document.createElement("p");
        return p;
    }

    function setResultado (mensagem, isValid) {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = " ";
        const p = criaParagrafo();

        if (isValid) {
            p.classList.add("paragrafo-resultado");   
        } else {
            p.classList.add("bad");
        }

        p.innerHTML = mensagem;
        resultado.appendChild(p);
    

    }
