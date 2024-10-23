
let produto = {
    nome: "banana",
    preco: 2,
    quantidade: 4,
    calcularTotal: function() {
        return this.preco * this.quantidade;
    },
};

console.log(produto)
console.log(produto.calcularTotal());