// Exercício 01
function equalCelsius(num1, num2) {
    if(num1 === 100) {
        console.log(`num1: ${num1}`);
    }
    if(num2 === 100) {
        console.log(`num2: ${num2}`);
    }
}

// Exercício 02
function divider(valor, divisor) {
    let divisoesExatas = 0;
    let divisoesNaoExatas = 0;
    
    for(let i = 1; i <= valor; i++) {
        if (i % divisor === 0) {
            divisoesExatas++;
        } else {
            divisoesNaoExatas++;
        }
    }
    
    console.log(`Divisões exatas: ${divisoesExatas}`);
    console.log(`Divisões não exatas: ${divisoesNaoExatas}`);
}

// Chamando as funções com os parâmetros
equalCelsius(10, 100);  // Parâmetros para o exercício 01
divider(111, 2);        // Parâmetros para o exercício 02
