let array = [1, 5, 2, 9, 6, 4]

function encontrarMaiorValor(a){

    let aux = 0;

    for(let i = 0; i <= 5; i++)
    {
        if(a[i] > aux)
        {
            aux = a[i];
        }
    }

    return aux;
};

console.log(encontrarMaiorValor(array));