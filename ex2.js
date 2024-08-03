let valor = 111;

let divisoesExatas = 0;
let divisoesNaoExatas = 0;

for(let i = 1; i <= valor; i++) {
    if (i % 2 === 0){
        divisoesExatas++;
    }else {
        divisoesNaoExatas++;
    }
}

console.log(`Divisões exatas: ${divisoesNaoExatas}`);
console.log(`Divisões não exatas: ${divisoesNaoExatas}`);



