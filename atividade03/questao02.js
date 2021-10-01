/**2)      Percorrer os números pares menores que 100.

a)       Adicionar em um array.

b)      Transformar o array em string.

c)       Exibir no console. */

var array = []

for (num = 0; num <= 100; num++){

    if (num % 2 == 0){
        array.push(num)
    }

    if (num == 100){

        let conversao = array.join(' , ')
        console.log(conversao)

    }
}