/**1)      Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:

a)       O número de caracteres da string.

b)      A string com todas suas letras em maiúsculo.

c)       O número de vogais da string.

d)      A string com todas suas letras em minúsculo.

e)      Fazer a busca pela palavra humanidade e exibir o index onde ela está. */

var texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo."

console.log(texto.length)

console.log(texto.toUpperCase())


function numVogais (){

    var quantidadeVogais = 0;
    var converterArray = texto.split('')

    for (num = 0; num <= converterArray.length; num++){

        if (converterArray[num] == 'a' || converterArray[num] == 'e' || converterArray[num] == 'i' || converterArray[num] == 'o' || converterArray[num] == 'u' || converterArray[num] == 'A' || converterArray[num] == 'E' || converterArray[num] == 'I' || converterArray[num] == 'O' || converterArray[num] == 'U'){

            quantidadeVogais++;

        }   

        if(num == 71){
            console.log(quantidadeVogais + " vogais ao total")
        }
    }
}

numVogais()

console.log(texto.toLowerCase())

console.log(texto.indexOf('humanidade'))
