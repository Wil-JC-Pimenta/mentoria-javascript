let meuArray = [2024, 1981, 2018, 2019, 1971];
    function tamanhoArray (arr) {
        let tamanhoArray=0;
        let x=1;
        for(i=0; i<x; i++) {
            if(meuArray[i] != undefined) {
              x++;
              continue;    
            }
            tamanhoArray=i;
        }
        return tamanhoArray;
    }
    console.log(meuArray.length);
    console.log(tamanhoArray(meuArray));