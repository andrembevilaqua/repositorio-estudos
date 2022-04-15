function numero(param1, param2){

    let maior10 = "";
    let maior20 = "";
    
    soma = numero1 + numero2;
    
    if (numero1 == numero2){
        iguais = 'são'
    } else {
        iguais = "não são"
    }

    if (soma > 10 && soma > 20){
        maior10 = "maior";
        maior20 = "maior";
    } else if ( soma > 10 && soma < 20){
        maior10 = "maior";
        maior20 = "menor";
    } else {
        maior10 = "menor";
        maior20 = "menor";
    }

    console.log("Os números " + numero1 + " e " + numero2 + " " + iguais + " iguais. Sua soma é " + soma + ", que é " + maior10 + " que 10 e " + maior20 + " que 20.")

}

var numero1 = 1;
var numero2 = 1;

numero(numero1,numero2);
