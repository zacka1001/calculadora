function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseInt(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').innerText = "Por favor, preencha todos os campos.";
        return;
    }

    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -time));
    const totalPayment = monthlyPayment * time;
    const totalInterest = totalPayment - principal;

    document.getElementById('result').innerText = 
        `Valor da Parcela Mensal: R$ ${monthlyPayment.toFixed(2)}\n` +
        `Total Pago: R$ ${totalPayment.toFixed(2)}\n` +
        `Total de Juros Pago: R$ ${totalInterest.toFixed(2)}`;
}
function calcularRaizes(a, b, c) {
    // Calcula o discriminante (delta)
    var delta = (b * b) - (4 * a * c);
    var raizes = [];

    // Se delta for maior que zero, há duas raízes reais distintas
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        raizes.push(x1, x2);
    } 
    // Se delta for igual a zero, há uma única raiz real
    else if (delta === 0) {
        var x = -b / (2 * a);
        raizes.push(x);
    } 
    // Se delta for menor que zero, as raízes são complexas
    else {
        raizes.push("Raízes complexas");
    }

    return raizes;
}

function solicitarValores() {
    // Solicita os valores de a, b e c ao usuário
    var a = parseFloat(prompt("Digite o valor de a:"));
    var b = parseFloat(prompt("Digite o valor de b:"));
    var c = parseFloat(prompt("Digite o valor de c:"));

    // Calcula as raízes usando a função calcularRaizes
    var raizes = calcularRaizes(a, b, c);

    // Exibe as raízes da equação
    if (raizes[0] === "Raízes complexas") {
        alert("As raízes são complexas.");
    } else {
        alert("Raízes da equação: " + raizes.join(", "));
    }
}

// Chama a função para solicitar os valores e calcular as raízes
solicitarValores();