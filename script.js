document.getElementById('eco-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Coletando os valores do formulário
    var consumoAgua = parseFloat(document.getElementById('consumo-agua').value);
    var consumoEnergia = parseFloat(document.getElementById('consumo-energia').value);
    var quilometrosCarro = parseFloat(document.getElementById('quilometros-carro').value);

    // Calculando a pegada ecológica
    var pegadaEco = (consumoAgua + consumoEnergia + quilometrosCarro) / 3;

    // Exibindo o resultado
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '<h2>Sua Pegada Ecológica é: ' + pegadaEco.toFixed(2) + '</h2>';
    resultadoElement.style.display = 'block';
});
