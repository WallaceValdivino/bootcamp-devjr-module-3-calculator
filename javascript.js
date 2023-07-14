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
    //Pego a conta nova e passo ela para dentro de uma variavel
    var newHistory = "<p>" + num1 + " " + op + " " + num2 + " = " + output + "</p>";
    //Passando o "history antigo" para dentro de uma variavel para facilitar
    var history = document.getElementById("history");

    //Concateno o que estava no "history antigo" com essa variavel, e passo isso para o "history novo"
    //Desta forma, o que for colocado fica em cima, e não embaixo, e toda vez que faço isso é acrescentado um filho no history 
    history.innerHTML = newHistory + history.innerHTML;

    //se o historico passar de dez filhos
    if (history.children.length > 10) {

        //removo o 11º filho, esta escrito 10, pois os arrays começam em 0
        history.removeChild(history.childNodes[10]);
    }
}
