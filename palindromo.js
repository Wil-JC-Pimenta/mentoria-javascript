const express = require('express');
const app = express();
const port = 3000;

// Função para verificar se uma string é um palíndromo
function palindromo(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Configurar uma rota para a raiz
app.get('/', (req, res) => {
    res.send('Rota Raíz');
});

// Configurar uma rota para /palindrome
app.get('/palindromo/:word', (req, res) => {
    const word = req.params.word;
    const result = palindromo(word);
    res.send(`A palavra "${word}" é um palíndromo? ${result}`);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
