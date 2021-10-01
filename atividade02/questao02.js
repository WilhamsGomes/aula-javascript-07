/**2)      Criar variáveis strings:

a)       Criar 3 variáveis com os nomes palavra1, palavra2, palavra3, cada uma contendo uma palavra igual ao nome da variável correspondentes (ex.: let palavra1= “palavra1”);

b)      Criar mais 3 variáveis chamadas frase1, frase2, frase2. Cada uma iniciará com “Esta é a frase com a ” mais a palavra correspondente.

c)       Exibir a seguinte string de múltiplas linhas:

Esta é a frase com a palavra1.

Esta é a frase com a palavra2.

Esta é a frase com a palavra3. */

var palavra1 = "palavra1"
var palavra2 = "palavra2"
var palavra3 = "palavra3"

var frase1 = "Esta é a frase com a"
var frase2 = "Esta é a frase com a"
var frase3 = "Esta é a frase com a"

console.log(frase1.concat(" ", palavra1))
console.log(frase2.concat(" ", palavra2))
console.log(frase3.concat(" ", palavra3))