
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function array(a)
{
    let cont = 0;
    let a2 = [];

    for(let i = 0; i < 10; i++)
    {
        if(a[i]%2 == 1)
        {
            a2[cont] = a[i];
            cont++;
        }
    }
    return a2;
}

console.log(array(vetor));