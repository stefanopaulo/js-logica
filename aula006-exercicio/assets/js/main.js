const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const heigth = Number(inputHeight.value);

    if (!weight) {
        setResult('Peso inválido', false);
        return;
    }

    if (!heigth) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(weight, heigth);
    const levelImc = getLevelImc(imc);

    const message = `Seu IMC é ${imc} (${levelImc}).`;

    setResult(message, true)
});

function getLevelImc(imc) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade 1', 'Obesidade 2', 'Obesidade 3'];

    if (imc > 39.9) return level[5];
      
    if (imc >= 34.9) return level[4];
      
    if (imc >= 29.9) return level[3];
      
    if (imc >= 24.9) return level[2];
      
    if (imc >= 18.5) return level[1];
      
    if (imc < 18.5) return level[0];
    
}

function getImc(weight, heigth) {
    const imc = weight / heigth ** 2;
    return imc.toFixed(2);
}

function createParagraph() {
    const p = document.createElement('p');
    return p;
}

function setResult(message, isValid) {
    const result = document.querySelector('.result');
    result.innerHTML = '';

    const p = createParagraph();
    p.innerHTML = message;

    if (isValid) {
        p.classList.add('paragraph-valid');
    } else {
        p.classList.add('paragraph-invalid');
    }

    result.appendChild(p);
}
