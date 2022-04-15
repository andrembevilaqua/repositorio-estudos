const pessoa = {
    primeiroNome: "Andre",
    ultimoNome  : "Bevilaqua",
    id          : 1,
    nomeCompleto: function(){
        return this.primeiroNome + " " + this.ultimoNome;
    },
    getId: function(){
        return this.id;
    }
}

console.log(pessoa.nomeCompleto);
console.log(pessoa.getId);
