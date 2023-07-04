/*1)      Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.

a)       Coloque eles em ordem crescente.

b)      Exibir no Console.
*/

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
var numero = [25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56]
numero.sort(comparaNumeros)
console.log(numero)
