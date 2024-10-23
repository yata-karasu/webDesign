let endereco = {
    rua: "Avenida Brasil",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo"
};

for (let propriedade in endereco) {
    console.log(endereco[propriedade]);
}