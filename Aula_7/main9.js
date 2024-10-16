let email = false;
let a = false;
let y = false;
let string = "papibaquigrafo@gmail.com";
let i = 0;

for(i = 0; i <= string.length; i++)
{
    if(string[i] == '@')
    {
        a = true;
    }
    if(string[i] == '.')
    {
        y = true;
    }
}

if(a == true && y == true)
{
    email = true;
}

console.log(email);
