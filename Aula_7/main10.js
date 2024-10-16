let string = "arara";
let i = 0;
let gnirts = "";
let palindromo = false;

for(i = string.length; i >= 0; i--)
{
    gnirts = gnirts.concat(string.charAt(i));
}

for(i = 0; i <= string.length; i++)
{
    if(string[i] == gnirts[i])
    {
        palindromo = true;
    }
    else
    {
        palindromo = false;
        break;
    }
}

console.log(palindromo);

