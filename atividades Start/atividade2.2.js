/*3)      Criar um array contendo 7 atividades que você faz durante o dia.

a)       Exibir no console as atividades na ordem inversa.

b)      Selecionar e exibir no console, os elementos nas posições 3 e 6.

c)       Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).

d)      Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.*/

var atividades = ['dormir','comer','cozinhar','dancar','brincar','andar','estudar']
atividades.sort((a,b) => {
    if (a > b) return 1;
    if(a < b) return -1;
    return 0;
    })
    console.log(atividades)
    console.log(atividades[3], atividades[6])
    var frase = atividades.toString()
    for(i = 0;i < atividades.length;i ++){
        frase = frase.replace(',','-');
        }
    console.log(frase)
    var atividadesFavoritas =  ['sair','curtir']
    var juncao = atividades.concat(atividadesFavoritas)
    console.log(juncao)
    