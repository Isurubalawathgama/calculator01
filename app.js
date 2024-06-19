function Calculate(){
    let number1 = "";
    let number2 = "";
    let operator = "";

    number1 = new Number (document.getElementById("number01").value);
    number2 = new Number (document.getElementById("number02").value);
    operator = document.getElementById("operator").value;
    let lbloutput = document.getElementById("output");

    switch (operator) {
        case "+":
            lbloutput.innerHTML = number1+number2;
            break;

        case "-":
            lbloutput.innerHTML = number1-number2;
            break;

        case "*":
            lbloutput.innerHTML = number1*number2;
            break;

        case "/":
            lbloutput.innerHTML = number1/number2;
            break;  

        default:
            break;
    }

}
