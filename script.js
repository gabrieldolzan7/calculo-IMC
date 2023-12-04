function calculateIMC() {
    var name = document.getElementById('name').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var imc = (weight / (height * height)).toFixed(2);
    var classification = getIMCClassification(imc);

    document.getElementById('imc').innerText = imc;
    document.getElementById('classification').innerText = classification;

    document.getElementById('result').classList.remove('hidden');
}

function getIMCClassification(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        return 'Pré-obesidade';
    } else if (imc >= 30.0 && imc <= 34.9) {
        return 'Obesidade Grau 1';
    } else if (imc >= 35.0 && imc <= 39.9) {
        return 'Obesidade Grau 2';
    } else {
        return 'Obesidade Grau 3';
    }
}
