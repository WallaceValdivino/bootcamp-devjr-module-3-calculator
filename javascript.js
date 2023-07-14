function calc(op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = 0;

    var output = num1 + num2;
    switch (op) {
        case '+':
            output = num1 + num2; break;

        case '-':
            output = num1 - num2; break;

        case '/':
            output = num1 / num2; break;

        case '*':
            output = num1 * num2; break;
    }
    document.getElementById("output").value = output;
//Pego a conta nova e jogo ela dentro de uma variavel
    var newHistory = "<div>" + num1 + " " + op + " " + num2 + " = " + output;
//Concateno o que estava no "history antigo" com essa variavel, e passo isso para o "history novo"
//Desta forma, o que for colocado fica em cima, e não embaixo 
document.getElementById("history").innerHTML = newHistory + document.getElementById("history").innerHTML;
}
