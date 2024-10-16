let string = "papibaquigrafo";
let i = 0;
let gnirts = "";

for(i = string.length; i >= 0; i--)
{
    gnirts = gnirts.concat(string.charAt(i));
}

console.log(gnirts);