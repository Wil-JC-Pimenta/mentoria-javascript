const express = require('express');
const app = express();
const port = 3000;
app.get("/",(req, res)=>{
    res.send("Rota Raiz");
});

app.listen(port,()=>{
    console.log('Servidor rodando na porta' + port);
    console.log(`Servidor rodando na porta ${port}`);
});

app.get("/pb/:buscarValor/?:valor",(req, res)=>{
    var inicio = 0;
    let meuArray = [1,2,3,4,5,6,7,8,9,10];
    let fim = 100;
    let etapas = 0;
    let buscar = req.params.buscarValor;
    console.log(req.params);


    while (inicio <= fim) {
        etapas++;
        let metade = Math.floor((inicio + fim) / 2);
        let sera = metade;
        //console.log("metade" + metade);
        //console.log("sera" + sera);

        if(sera == buscar){
            console.log("Achei " + sera + " depois de " + etapas);
            res.send("Achei " + sera + " depois de " + etapas);
            return;
        } 

        if(sera > buscar){
            fim = metade -1;
        } else {
            inicio = metade +1;
        }
    }

console.log('Interagiu ' + etapas);
    res.send("/fim" + buscar);
})