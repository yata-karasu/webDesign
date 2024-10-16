let string = "papibaquigrafo";
let vogal = 0;

for(i = 0; i <= string.length; i++)
{
    if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u')
    {
        vogal++;
    }
}

console.log(vogal);